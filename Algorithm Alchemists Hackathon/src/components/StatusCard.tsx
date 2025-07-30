interface Props {
    label: string;
    value: string;
    icon?: React.ReactNode;
    color?: 'success'|'warning'|'danger'|'primary';
  }
  const colorMap = {
    primary: 'bg-blue-100 text-primary',
    success: 'bg-green-100 text-success',
    warning: 'bg-yellow-100 text-warning',
    danger: 'bg-red-100 text-danger'
  };
  const StatusCard = ({ label, value, icon, color='primary' }: Props) => (
    <div className={`p-4 rounded-lg shadow ${colorMap[color]} flex items-center gap-4`}>
      {icon}
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
  export default StatusCard;
