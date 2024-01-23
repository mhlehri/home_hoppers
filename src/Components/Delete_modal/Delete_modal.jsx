import { useState } from "react";

export const Delete_modal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="inline-block">
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#0095FF] text-white p-2 rounded-lg"
      >
        Delete
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute lg:w-72 p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <svg
            className={`${
              openModal
                ? "scale-100 rotate-0 duration-500"
                : "scale-0 rotate-180"
            } delay-150 mx-auto`}
            width={75}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
                stroke="#ff0000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <circle cx="12" cy="16" r="1" fill="#ff0000"></circle>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#ff0000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h1 className="p-2 text-3xl font-semibold text-black">
            Are you sure?
          </h1>
          <p className="mb-3 w-4/5 mx-auto">You're gonna delete house</p>
          <button
            onClick={() => setOpenModal(false)}
            className="text-white font-bold me-2 bg-[#1ba768] px-6 py-2 rounded-full"
          >
            Ok
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className="text-[#ff0000] font-bold hover:text-white hover:bg-[#ff0000] px-6 py-2 border border-[#ff0000] rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
