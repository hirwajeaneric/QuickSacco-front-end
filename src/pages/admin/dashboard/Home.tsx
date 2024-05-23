import AdminStats from "@/components/AdminStats"
import ManagersTable from "@/components/tables/teacherApplications/pages"
import { listOfManager } from "@/fakes/users"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      
      <div>
        <h1 className="font-bold text-2xl">Welcome to QuickSACCO admin dashboard</h1>
        <p>Manage accounts of user in your organization</p>
      </div>

      <AdminStats />
      
      <div className="flex flex-wrap justify-between items-center p-5 bg-[url('istockphoto-1413313627-170667a.jpg')] bg-no-repeat bg-cover">
        <div>
          <h2 className="text-xl font-bold text-white">Access Management</h2>
          <p className="text-white">Add or modify manager access to the system</p>
        </div>
        <Link className="px-3 py-1 bg-blue-500 text-white rounded-sm" to={'/admin/managers/add'}>Add user</Link>
      </div>

      <div>
        <h2 className="text-xl font-bold">Managers</h2>
        <ManagersTable data={listOfManager} />
      </div>

    </div>
  )
}

export default Home