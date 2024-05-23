import LoansTable from "@/components/tables/loanApplications/pages";
import { applications } from "@/fakes/applications";

const Loans = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Loans</h1>
      </div>
      <LoansTable data={applications} />
    </div>
  )
}

export default Loans