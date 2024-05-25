import ManagerStats from "@/components/sections/ManagerStats";
import ApplicationsPerMonth from "@/components/charts/Applications";
import Responses from "@/components/tables/responses/pages";
import { listOfResponses } from "@/fakes/responses";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">

      <div>
        <h1 className="font-bold text-2xl">Welcome to QuickSACCO manager dashboard</h1>
        <p>Manage accounts of user in your organization</p>
      </div>

      <ManagerStats />

      <div className="flex justify-between">
        <div className="flex flex-col w-full md:w-[49%] bg-white rounded-md">
          <ApplicationsPerMonth />
        </div>
        <div className="flex flex-col w-full md:w-[49%]">
          <Responses data={listOfResponses} />
        </div>
      </div>

    </div>
  )
}

export default Home