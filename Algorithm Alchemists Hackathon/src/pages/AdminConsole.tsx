import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import AgentMonitor from '../components/AgentMonitor';
import axios from '../api/axios';

interface FresherRow {
  id: string; name: string; department: string; status: string; avgScore: number;
}
const AdminConsole = () => {
  const [rows,setRows]=useState<FresherRow[]>([]);
  const [search,setSearch]=useState('');
  const [queueDepth, setDepth] = useState<number[]>([]);
  const [latency, setLatency] = useState<number[]>([]);
  const labels = Array.from({length: queueDepth.length}, (_,i)=>`${i}`);

  useEffect(()=>{
    axios.get('/admin/freshers').then(res=>setRows(res.data));
    const timer = setInterval(()=>{
      axios.get('/admin/agent-queue').then(res=>{
        setDepth(d=>[...d.slice(-9), res.data.depth]);
        setLatency(l=>[...l.slice(-9), res.data.latency]);
      });
    }, 3000);
    return ()=>clearInterval(timer);
  }, []);

  const filtered = rows.filter(r=>r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between">
        <input
          className="border px-3 py-2 rounded w-64"
          placeholder="Search by name..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
        <button
          onClick={()=>window.location.href='/admin/reports'}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Generate Report
        </button>
      </div>

      <DataTable<FresherRow>
        columns={[
          {key:'name',label:'Name'},
          {key:'department',label:'Department'},
          {key:'status',label:'Status'},
          {key:'avgScore',label:'Avg Score'}
        ]}
        data={filtered}
      />

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Agent Queue Health (last 10 points)</h3>
        <AgentMonitor queueDepth={queueDepth} latency={latency} labels={labels} />
      </div>
    </div>
  );
};
export default AdminConsole;
