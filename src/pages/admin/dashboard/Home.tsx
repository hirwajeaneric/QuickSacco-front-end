import { useGetAllLoans } from "@/api/application"
import { useGetManagers, useGetApplicants } from "@/api/auth"
import AdminStats from "@/components/sections/AdminStats"
import ManagersTable from "@/components/tables/applicantApplications/pages"
import { Link } from "react-router-dom"

const Home = () => {
  const { managers, isLoading: isLoadingManagers } = useGetManagers();
  const { applicants, isLoading: isLoadingApplicants } = useGetApplicants();
  const { loans, isLoading: isLoadingLoans } = useGetAllLoans();  

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-2xl">Welcome to QuickSACCO admin dashboard</h1>
        <p>Manage accounts of user in your organization</p>
      </div>

      {isLoadingLoans || isLoadingApplicants || isLoadingManagers && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      <AdminStats loans={loans || []} managers={managers || []} applicants={applicants || []} />

      <div className="flex flex-wrap justify-between items-center p-5 bg-[url('istockphoto-1413313627-170667a.jpg')] bg-no-repeat bg-cover">
        <div>
          <h2 className="text-xl font-bold text-white">Access Management</h2>
          <p className="text-white">Add or modify manager access to the system</p>
        </div>
        <Link className="px-3 py-1 bg-blue-500 text-white rounded-sm" to={'/admin/managers/add'}>Add user</Link>
      </div>

      <div>
        <h2 className="text-xl font-bold">Managers</h2>
        {isLoadingManagers && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
        {managers && <ManagersTable data={managers} />}
      </div>
    </div>
  )
}

export default Home