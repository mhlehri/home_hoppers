import { NavLink } from "react-router-dom";
import { Login_register_modal } from "../Login_register_modal/Login_Register_Modal";

const navItem = ["Home", "FAQ", "Support"];

const Navbar = () => {
  return (
    <nav className="shadow-black shadow-sm py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-medium">Home Hoppers</h1>
        <ul className="flex gap-3">
          {navItem.map((_, i) => (
            <li key={_}>
              <NavLink
                to={`/${_ === "Home" ? "" : _}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-6 bg-[#0095FF] text-white py-2 rounded-lg duration-300"
                    : ""
                }
              >
                {_}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Login_register_modal text={"Login"}></Login_register_modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
