const Table = () => {
  return (
    <div>
      <div className="relative overflow-x-auto border rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-3 py-4 space-x-3">
                <button className="font-medium text-blue-600 hover:underline">
                  view
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-3 py-4 space-x-3">
                <button className="font-medium text-blue-600 hover:underline">
                  view
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-3 py-4 space-x-3">
                <button className="font-medium text-blue-600 hover:underline">
                  view
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="font-medium text-blue-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
