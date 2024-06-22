import ManagersTable from "@/components/tables/teacherApplications/pages"
import { useGetManagers } from "@/api/auth";

const Managers = () => {
  const { managers, isLoading } = useGetManagers();
  
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Managers</h1>
      </div>
      {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      {managers && <ManagersTable data={managers} />}
    </div>
  )
}

export default Managers