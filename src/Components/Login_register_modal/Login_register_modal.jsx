import { Link, json, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Hello } from "../../Shared/Lottie/Lottie";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const Login_register_modal = ({ text }) => {
  const [select_options, setSelect_options] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [register, setRegister] = useState(false);
  const { user, setIsChanged } = useContext(AuthContext);
  const handleOnChange = (e) => {
    setSelect_options(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmitR = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = select_options;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    console.log(name, number, role, email, password);
    const userInfo = { name, role, number, email, password };
    const localInfo = { name, role, number, email };
    if (password.length < 6) {
      return toast.error("Password should be at least 6 character!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!password.match(/[A-Z]/)) {
      return toast.error("Password should have at least one UpperCase!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (
      !password.match(/[!@#\$%\^&\*\(\)\-_\+=\{\}\[\]:;'<>,\.\?/\\\|`~"]/)
    ) {
      return toast.error("Password should have at least special Character!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!number.startsWith("880")) {
      return toast.error("Provide a Bangladeshi Number", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!(number.length === 13)) {
      toast.error("Invalid Number", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios
        .post("http://localhost:5000/addUser", userInfo)
        .then(() => {
          localStorage.setItem("user", JSON.stringify(localInfo));
          toast.success("Successfully registered!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsChanged((pre) => !pre);
          navigate(
            `${
              user.role == "House Owner"
                ? "/owner_dashboard"
                : "/renter_dashboard"
            }`
          );
        })
        .catch(() =>
          toast.error("Email Already exists", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        );
    }
  };
  const handleSubmitL = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .get(`http://localhost:5000/user?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.email === email) {
          const { name, email, role, number } = res.data;
          const localInfo = { name, email, role, number };
          localStorage.setItem("user", JSON.stringify(localInfo));
          toast.success("Successfully logged!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsChanged((pre) => !pre);
          navigate(
            `${
              role == "House Owner" ? "/owner_dashboard" : "/renter_dashboard"
            }`
          );
        } else if (res.data.error) {
          toast.error(res.data.error, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((ee) =>
        toast.error(ee, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  };

  return (
    <div>
      {text === "login" && user ? (
        <button
          onClick={() => {
            setIsChanged((er) => !er);
            toast.success("Successfully logout!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            localStorage.removeItem("user");
          }}
          className={`border border-black hover:bg-black hover:text-white p-2 rounded-lg ${
            text === "Book Now" && "hidden"
          }`}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className={`border border-black hover:bg-black hover:text-white p-2 rounded-lg ${
            text === "Book Now" && "hidden"
          }`}
        >
          Login
        </button>
      )}
      {text == "Book Now" && (
        <button
          onClick={() => setOpenModal(true)}
          className="border border-black hover:bg-black hover:text-white p-2 rounded-lg"
        >
          Book Now
        </button>
      )}
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
          <div className="flex items-center relative overflow-hidden">
            {/* register form  */}
            <form
              onSubmit={handleSubmitR}
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
                    required
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="p-3 block w-full outline-none border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    onChange={handleOnChange}
                    value={select_options}
                    className="p-3 block w-full outline-none border rounded-md"
                    name="role"
                    required
                  >
                    <option className="py-2 rounded text-gray-400" value="">
                      Choose a role
                    </option>
                    <option
                      className="py-2 rounded text-gray-400"
                      value="House Owner"
                    >
                      House Owner
                    </option>
                    <option
                      className="py-2 rounded text-gray-400"
                      value="House Renter"
                    >
                      House Renter
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="number" className="block">
                    Number
                  </label>
                  <input
                    required
                    id="number"
                    type="number"
                    defaultValue={880}
                    className="p-3 block w-full outline-none border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    className="p-3 block w-full outline-none border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <input
                    required
                    id="password"
                    type="password"
                    placeholder=".............."
                    min={5}
                    className="p-3 block w-full outline-none border rounded-md"
                  />
                </div>
              </div>
              {/* button type will be submit for handling form submission*/}
              <button
                type="submit"
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
              onSubmit={handleSubmitL}
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
                  name="email"
                  placeholder="example@example.com"
                  className="p-3 block w-full outline-none border rounded-md"
                />
                <label htmlFor="_password" className="block">
                  Password
                </label>
                <input
                  id="_password"
                  type="password"
                  name="password"
                  placeholder=".............."
                  min={5}
                  className="p-3 block w-full outline-none border rounded-md"
                />
              </div>{" "}
              <button
                type="submit"
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
