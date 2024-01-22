import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
