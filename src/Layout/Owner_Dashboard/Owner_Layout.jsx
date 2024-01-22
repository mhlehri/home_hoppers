import { Outlet } from "react-router-dom";
import Dash_Nav from "../../Components/Dash_Nav/Dash_Nav";

const Owner_Layout = () => {
  return (
    <div className="">
      <Dash_Nav />
      <div className="mx-auto py-5 md:py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Owner_Layout;
