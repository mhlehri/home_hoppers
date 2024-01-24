import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const View_modal = ({ id, text }) => {
  console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const { data } = useQuery({
    queryKey: ["view_", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/singleHouse/${id}`);
      return res.data;
    },
  });
  return (
    <div className="inline-block">
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {text}
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute lg:w-3/5 p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <section className="text-gray-700 body-font text-left overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="mx-auto flex flex-wrap">
                <img
                  alt="house"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={data?.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                    {data?.name}
                  </h1>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Address:</span>
                    {data?.address}
                  </h2>
                  <p className="leading-relaxed mb-1">
                    <span className="font-bold text-black">Details:</span>{" "}
                    {data?.des}
                  </p>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Owner:</span>{" "}
                    {data?.owner_name}
                  </h2>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Number:</span>
                    {data?.number}
                  </h2>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Email:</span>{" "}
                    {data?.email}
                  </h2>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Bedrooms:</span>{" "}
                    {data?.bedrooms}
                  </h2>{" "}
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Bathrooms:</span>{" "}
                    {data?.bathrooms}
                  </h2>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">Size:</span>{" "}
                    {data?.size}
                  </h2>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
                    <span className="font-bold text-black">
                      Available Date:
                    </span>{" "}
                    {data?.date}
                  </h2>{" "}
                  <hr className="my-2" />
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      {data?.rent}
                    </span>
                    <button
                      onClick={() => setOpenModal(false)}
                      className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default View_modal;
