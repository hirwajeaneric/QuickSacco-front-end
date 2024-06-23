import { Calendar, LogOut } from "lucide-react"

const DashboardTopBar = () => {
  const logout = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem(window.location.pathname.includes(`/admin`) ? `admin` : `manager`);
    window.location.replace("/admin/auth");
  }

  return (
    <div className="w-full justify-between items-center p-5 flex flex-nowrap">
      <h2 className="inline font-bold text-blue-950">Dashboard <span className="text-gray-500 font-normal">{window.location.pathname.includes(`/admin`) ? `/ Admin` : `/ Manager`}</span></h2>
      <div className="flex gap-3">
        <div className="flex items-center justify-end">
          <Calendar className="inline-block mr-2 w-5" />
          <span className="text-sm text-gray-800">{new Date().toDateString()}</span>
        </div>
        <button onClick={logout}>
          <LogOut className="w-5"/>
        </button>
      </div>
    </div>
  )
}

export default DashboardTopBar