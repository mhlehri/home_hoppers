import axios from "axios";
import { Delete_modal } from "../../../Components/Delete_modal/Delete_modal";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import View_modal from "../../../Components/View_modal/View_modal";
import { Edit_modal } from "../../../Components/Edit_modal/Edit_modal";
import { Add_new_modal } from "../../../Components/Add_new_modal/Add_new_modal";

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
      <Add_new_modal refetch={refetch} text={"Add New House"} />
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
                  <Edit_modal
                    refetch={refetch}
                    text={
                      <svg
                        className="w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#00b34d"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#00b34d"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    }
                    id={_?._id}
                  />
                  <Delete_modal refetch={refetch} id={_?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
