import React from 'react';
interface Props<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
}
const DataTable = <T,>({ columns, data }: Props<T>) => (
  <div className="overflow-x-auto bg-white shadow rounded-lg">
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          {columns.map(col=>(
            <th key={String(col.key)} className="px-4 py-2 text-left">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row,i)=>(
          <tr key={i} className="border-t">
            {columns.map(col=>(
              <td key={String(col.key)} className="px-4 py-2">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default DataTable;
