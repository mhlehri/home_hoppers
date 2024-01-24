import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const Delete_modal = ({ refetch, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/deleteHouse/${id}`).then(() => {
      refetch();
      setOpenModal(false);
      toast.success("Successfully removed!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };
  return (
    <div className="inline-block">
      <button
        onClick={() => setOpenModal(true)}
        className="hover:bg-red-500/30 p-2 rounded-lg"
      >
        <svg
          className="w-6"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>delete [#ff0000]</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -360.000000)"
                fill="#ff0000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                    id="delete-[#ff0000]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
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
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
                stroke="#ff0000"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <circle cx="12" cy="16" r="1" fill="#ff0000"></circle>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#ff0000"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h1 className="p-2 text-3xl font-semibold text-black">
            Are you sure?
          </h1>
          <p className="mb-3 w-4/5 mx-auto">You're gonna delete house</p>
          <button
            onClick={handleDelete}
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
