import axios from "axios";
import { Delete_modal } from "../../../Components/Delete_modal/Delete_modal";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import View_modal from "../../../Components/View_modal/View_modal";

const Table = () => {
  const { user } = useContext(AuthContext);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["myHouse", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/myHouses/${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <>
      <div className="relative overflow-x-auto border rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Rent
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
          {data?.length ? (
            <tbody>
              {data?.map((_, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {_?.name}
                  </th>
                  <td className="px-6 py-4">{_?.rent}</td>
                  <td className="px-6 py-4">{_?.city}</td>
                  <td className="px-6 py-4">{_?.status}</td>
                  <td className="px-3 py-4 space-x-3">
                    <View_modal
                      text={
                        <svg
                          className="w-6"
                          fill="#009dff"
                          viewBox="-3.5 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#009dff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>view</title>{" "}
                            <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path>{" "}
                          </g>
                        </svg>
                      }
                      refetch={refetch}
                      id={_?._id}
                    />
                    <Delete_modal refetch={refetch} id={_?._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className="text-center py-2">
              <td colSpan={5}>No Data Available</td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
};

export default Table;
