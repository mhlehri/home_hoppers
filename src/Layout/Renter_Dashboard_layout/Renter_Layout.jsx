import { Outlet } from "react-router-dom";
import Dash_Nav from "../../Components/Dash_Nav/Dash_Nav";

const Renter_Layout = () => {
  return (
    <div>
      <Dash_Nav role="House Renter" />
      <div className="mx-auto py-5 md:py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Renter_Layout;
