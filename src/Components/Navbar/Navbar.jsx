import { NavLink } from "react-router-dom";
import { Login_register_modal } from "../Login_register_modal/Login_Register_Modal";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const navItem = ["Home", "Dashboard"];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="shadow-black shadow-sm py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-medium">Home Hoppers</h1>
        <ul className="flex">
          {navItem.map((_, i) => (
            <li key={_}>
              <NavLink
                to={`/${
                  _ === "Home"
                    ? ""
                    : user?.role === "House Owner"
                    ? "owner_dashboard"
                    : user?.role === "House Renter"
                    ? "renter_dashboard"
                    : _
                }`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-6 bg-black text-white py-2 rounded-lg duration-300"
                    : "px-6 py-2 hover:bg-black/20 rounded-lg"
                }
              >
                {_}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Login_register_modal text="login"></Login_register_modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
