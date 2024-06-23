import ManagerDashBoardSideMenuBar from "@/components/sections/ManagerDashBoardSideMenuBar"
import DashboardTopBar from "@/components/sections/DashboardTopBar"
import { Outlet } from "react-router-dom"

const ManagerDashboard = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <ManagerDashBoardSideMenuBar />
      <div className="flex flex-col w-full bg-slate-100 overflow-y-scroll">
        <DashboardTopBar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard