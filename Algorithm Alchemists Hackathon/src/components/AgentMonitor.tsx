import { Line } from 'react-chartjs-2';

interface Props { queueDepth: number[]; latency: number[]; labels: string[]; }
const AgentMonitor = ({ queueDepth, latency, labels }: Props) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Queue Depth',
        data: queueDepth,
        borderColor: '#004aad',
        backgroundColor: 'rgba(0,74,173,0.2)'
      },
      {
        label: 'Avg Latency (ms)',
        data: latency,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245,158,11,0.2)'
      }
    ]
  };
  return <Line data={data} />;
};
export default AgentMonitor;
