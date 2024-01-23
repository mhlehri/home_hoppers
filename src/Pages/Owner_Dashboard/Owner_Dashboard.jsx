import { Add_new_modal } from "../../Components/Add_new_modal/Add_new_modal";
import Table from "./Table/Table";

const Owner_Dashboard = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Add_new_modal text={"Add New House"} />
      <Table />
    </div>
  );
};

export default Owner_Dashboard;
