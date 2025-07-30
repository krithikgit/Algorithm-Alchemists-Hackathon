import { useEffect, useState } from 'react';
import StatusCard from '../components/StatusCard';
import ProgressBar from '../components/ProgressBar';
import { useWebSocket } from '../hooks/useWebSocket';
import axios from '../api/axios';

interface IStatus {
  quizzes: string; coding: string; assignments: string; certification: string;
  checkpoints: { title: string; done: boolean }[];
}

const FresherDashboard = () => {
  const [status, setStatus] = useState<IStatus>();
  const message = useWebSocket<IStatus>('/ws/fresher');

  useEffect(()=>{
    axios.get('/freshers/me/dashboard').then(res=>setStatus(res.data));
  }, []);

  useEffect(()=>{
    if (message) setStatus(message);
  }, [message]);

  if (!status) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard label="Quizzes" value={status.quizzes} color="primary" />
        <StatusCard label="Coding" value={status.coding} color="success" />
        <StatusCard label="Assignments" value={status.assignments} color="warning" />
        <StatusCard label="Certifications" value={status.certification} color="danger" />
      </div>

      <ProgressBar checkpoints={status.checkpoints} />

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-2">Personalized Schedule (Next 7 days)</h3>
        {/* Simplified list instead of calendar */}
        <ul className="list-disc pl-6 space-y-1">
          {['Day 1: OOP Basics','Day 2: MCQ Quiz','Day 3: JDBC Lab','Day 4: Coding Kata','Day 5: Azure Fundamentals'].map((v,i)=>(
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FresherDashboard;
