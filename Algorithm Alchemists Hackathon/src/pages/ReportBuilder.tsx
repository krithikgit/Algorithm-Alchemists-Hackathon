import { useState } from 'react';
import axios from '../api/axios';

const ReportBuilder = () => {
  const [dept,setDept]=useState('BFSI');
  const [format,setFormat]=useState<'pdf'|'csv'>('pdf');

  const handleDownload = async () => {
    const { data } = await axios.get('/reports', {
      params: { department: dept, format },
      responseType: 'blob'
    });
    const blob = new Blob([data], { type: format==='pdf'?'application/pdf':'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report_${dept}.${format}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Report Builder</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
        <div>
          <label className="block text-sm mb-1">Department</label>
          <select value={dept} onChange={e=>setDept(e.target.value)}
                  className="border px-3 py-2 rounded w-full">
            <option>BFSI</option><option>Healthcare</option><option>Retail</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Format</label>
          <select value={format} onChange={e=>setFormat(e.target.value as any)}
                  className="border px-3 py-2 rounded w-full">
            <option value="pdf">PDF</option><option value="csv">CSV</option>
          </select>
        </div>
      </div>
      <button onClick={handleDownload}
              className="mt-6 bg-primary text-white px-6 py-2 rounded">
        Download
      </button>
    </div>
  );
};
export default ReportBuilder;
