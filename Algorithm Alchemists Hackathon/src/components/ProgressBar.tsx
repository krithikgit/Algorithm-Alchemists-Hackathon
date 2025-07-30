interface Checkpoint { title: string; done: boolean; }
const ProgressBar = ({ checkpoints }: { checkpoints: Checkpoint[] }) => {
  const completed = checkpoints.filter(c=>c.done).length;
  const pct = Math.round((completed / checkpoints.length) * 100);
  return (
    <div className="my-6">
      <div className="flex justify-between mb-2">
        {checkpoints.map((c,i)=>(
          <div key={i} className="flex-1 text-center text-xs">
            <span className={c.done ? 'text-success font-semibold' : 'text-gray-400'}>
              {c.title}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-right text-sm mt-1">{pct}% complete</p>
    </div>
  );
};
export default ProgressBar;
