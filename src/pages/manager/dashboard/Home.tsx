import ManagerStats from "@/components/sections/ManagerStats";
import ApplicationsPerMonth from "@/components/charts/Applications";
import { useGetTeachers } from "@/api/auth";
import { useGetManagerAssignedLoans } from "@/api/application";
import LoansTable from '@/components/tables/loanApplications/pages';

const Home = () => {
  const { isLoading: isLoadingLoans, managerApplications } = useGetManagerAssignedLoans();
  const { teachers, isLoading: isLoadingTeachers } = useGetTeachers();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-2xl">Welcome to QuickSACCO manager dashboard</h1>
        <p>Manage accounts of user in your organization</p>
      </div>

      {isLoadingLoans || isLoadingTeachers && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      <ManagerStats loans={managerApplications || []} teachers={teachers || []} />

      <div className="flex justify-between">
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