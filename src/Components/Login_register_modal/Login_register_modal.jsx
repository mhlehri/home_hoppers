import { Link } from "react-router-dom";
import { useState } from "react";
import { Hello } from "../../Shared/Lottie/Lottie";

export const Login_register_modal = ({ text }) => {
  const [openModal, setOpenModal] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-gray-700 text-white p-2 rounded-lg"
      >
        {text}
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full md:w-96 lg:w-[800px] bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "opacity-1 duration-300 translate-y-0"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <svg
            onClick={() => setOpenModal(false)}
            className="w-10 mx-auto mr-0 cursor-pointer"
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
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#000"
              ></path>
            </g>
          </svg>
          <div className=" bg-white flex items-center relative overflow-hidden shadow-xl">
            {/* register form  */}
            <form
              className={`p-8 w-full ${
                register
                  ? "lg:translate-x-0"
                  : "lg:-translate-x-full hidden lg:block"
              } duration-500`}
            >
              <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">
                Register
              </h1>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <input
                    id="name"
                    type="name"
                    placeholder="John Doe"
                    className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block">
                    Role
                  </label>
                  <input
                    id="role"
                    type="name"
                    placeholder="Owner or Renter"
                    className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block">
                    Number
                  </label>
                  <input
                    id="number"
                    type="number"
                    placeholder="Owner or Renter"
                    className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="u_email" className="block">
                    Email
                  </label>
                  <input
                    id="u_email"
                    type="u_email"
                    placeholder="example@example.com"
                    className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="u_password" className="block">
                    Password
                  </label>
                  <input
                    id="u_password"
                    type="u_password"
                    placeholder=".............."
                    min={5}
                    className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                  />
                </div>
              </div>
              {/* button type will be submit for handling form submission*/}
              <button
                type="button"
                className="py-2 px-5 mb-4 mx-auto mt-6 shadow-lg border rounded-md border-black block"
              >
                Submit
              </button>
              <p className="mb-3 text-center">
                Already have an account?
                <Link
                  onClick={() => {
                    setRegister(!register);
                  }}
                  className="underline font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
            {/* img */}
            <div
              className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden ${
                register
                  ? "translate-x-full rounded-bl-full duration-500"
                  : "rounded-br-full"
              }`}
            >
              <Hello />
            </div>
            {/* login form */}
            <form
              className={`p-8 w-full mr-0 ml-auto duration-500 ${
                register ? "lg:translate-x-full hidden lg:block" : ""
              }`}
            >
              <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">
                Login
              </h1>
              <div className="space-y-5">
                <label htmlFor="_email" className="block">
                  Email
                </label>
                <input
                  id="_email"
                  type="email"
                  placeholder="example@example.com"
                  className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                />
                <label htmlFor="_password" className="block">
                  Password
                </label>
                <input
                  id="_password"
                  type="password"
                  placeholder=".............."
                  min={5}
                  className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
                />
              </div>
              {/* button type will be submit for handling form submission*/}
              <button
                type="button"
                className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block"
              >
                Submit
              </button>
              <p className="mb-3 text-center">
                Don't have an account?
                <Link
                  onClick={() => {
                    setRegister(!register);
                  }}
                  className="underline font-semibold"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
