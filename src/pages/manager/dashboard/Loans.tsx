import { useGetManagerAssignedLoans } from "@/api/application";
import LoansTable from "@/components/tables/loanApplications/pages";

const Loans = () => {
  const { isLoading, managerApplications } = useGetManagerAssignedLoans();
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Loans</h1>
      </div>
      {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      {managerApplications && <LoansTable data={managerApplications} />}
    </div>
  )
}

export default Loans