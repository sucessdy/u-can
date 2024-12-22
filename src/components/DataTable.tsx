type DataTableProps = {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  }[];
};
export default function DataTable({ data } : DataTableProps) {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Name
              </p>
            </th>
          </tr>
        </thead>
        {data.map((row) => (
            <tr key={row.id}> </tr>
        ))}
      </table>
    </div>
  );
}
