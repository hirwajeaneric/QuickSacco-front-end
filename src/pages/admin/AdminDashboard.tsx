import DashBoardSideMenuBar from "@/components/sections/DashBoardSideMenuBar"
import DashboardTopBar from "@/components/sections/DashboardTopBar"
import { Outlet } from "react-router-dom"

const AdminDashboard = () => {
  const unParsedUserInfo: string = localStorage.getItem('admin') as string;
  if (unParsedUserInfo) {
    window.location.replace('/admin/auth');
  }

  return (
    <div className="flex min-h-screen w-full">
      <DashBoardSideMenuBar />
      <div className="flex flex-col w-full bg-slate-100 overflow-y-auto">
        <DashboardTopBar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard