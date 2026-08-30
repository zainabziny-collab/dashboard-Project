///Context/////////////////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../../Context/Context";

///Form////////////////////////////////////////////////////////////////////////////////
import AddForm from "../forms/addForm/AddForm";
import EditForm from "../forms/editform/EditForm";

///dashboard/////////////////////////////////////////////////////////////////////////////
import DashboardTable from "../dashboardTable/DashboardTable";
import DashboardBoxes from "../dashboardBoxes/DashboardBoxes";

const Dashboard = () => {
  const { openForm, openEdit } = useContext(ShowContext);

  return (
    <>
      <div className=" flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 ">
        <DashboardBoxes />
      </div>
      <div className="w-full">
        <DashboardTable />
      </div>
      {openForm && <AddForm />}
      {openEdit && <EditForm />}
    </>
  );
};

export default Dashboard;
