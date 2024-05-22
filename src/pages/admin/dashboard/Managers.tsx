import { listOfManager } from "@/fakes/users";
import ManagersTable from "@/components/tables/managers/pages"

const Managers = () => {
  return (
    <div className="flex flex-col gap-5">
      
      <div>
        <h1 className="font-bold text-xl">Managers</h1>
      </div>
      <ManagersTable data={listOfManager} />
    </div>
  )
}

export default Managers