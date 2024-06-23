import ManagerStats from "@/components/sections/ManagerStats";
import ApplicationsPerMonth from "@/components/charts/Applications";
import { useGetTeachers } from "@/api/auth";
import { useGetManagerAssignedLoans } from "@/api/application";
import LoansTable from '@/components/tables/loanApplications/pages';
import { useState } from "react";
import Filter from "@/components/others/Filter";

export type DataFilterTypes = {
  type: string,
  value: string
}

const Home = () => {
  const { isLoading: isLoadingLoans, managerApplications } = useGetManagerAssignedLoans();
  const { teachers, isLoading: isLoadingTeachers } = useGetTeachers();
  const [dataFilter, setDataFilter] = useState({ type: 'This week', value: '' });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h1 className="font-bold text-2xl">Welcome to QuickSACCO manager dashboard</h1>
          <p>Manage accounts of user in your organization</p>
        </div>
        <div>
          <Filter dataFilter={dataFilter} setDataFilter={setDataFilter} />
        </div>
      </div>

      {isLoadingLoans || isLoadingTeachers && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      <ManagerStats loans={managerApplications || []} teachers={teachers || []} />

      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col w-full md:w-[49%] bg-white rounded-md">
          <ApplicationsPerMonth loans={managerApplications || []} />
        </div>
        <div className="flex flex-col w-full md:w-[49%]">
          {managerApplications && <LoansTable data={managerApplications} />}
        </div>
      </div>

    </div>
  )
}

export default Home