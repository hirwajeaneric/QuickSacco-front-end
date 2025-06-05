import ManagerStats from "@/components/sections/ManagerStats";
import ApplicationsPerMonth from "@/components/charts/Applications";
import { useGetApplicants } from "@/api/auth";
import { useGetManagerAssignedLoans } from "@/api/application";
import LoansTable from '@/components/tables/loanApplications/pages';
import { useState } from "react";
import Filter from "@/components/others/Filter";
import { loanFilterPerPeriod } from "@/utils/helperFunctions";
import ReportChoice from "@/components/others/ReportChoice";

export type DataFilterTypes = {
  type: string,
  value: string
}

const Home = () => {
  const { isLoading: isLoadingLoans, managerApplications } = useGetManagerAssignedLoans();
  const { applicants, isLoading: isLoadingApplicants } = useGetApplicants();
  const [dataFilter, setDataFilter] = useState({ type: 'This week', value: '' });
  const [reportType, setReportType] = useState('Loans');

  console.log(reportType);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h1 className="font-bold text-2xl">Welcome to QuickSACCO manager dashboard</h1>
          <p>Manage accounts of user in your organization</p>
        </div>
        <div className="flex gap-3 items-center flex-wrap">
          <Filter dataFilter={dataFilter} setDataFilter={setDataFilter} />
          <ReportChoice setReportType={setReportType} />  
        </div>
      </div>

      {isLoadingLoans || isLoadingApplicants && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      <ManagerStats
        loans={managerApplications || []}
        applicants={applicants || []}
        filter={dataFilter}
      />

      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col w-full md:w-[49%] bg-white rounded-md">
          <ApplicationsPerMonth
            loans={managerApplications || []}
            filter={dataFilter}
          />
        </div>
        <div className="flex flex-col w-full md:w-[49%]">
          {managerApplications && <LoansTable data={loanFilterPerPeriod(managerApplications, dataFilter)} />}
        </div>
      </div>

    </div>
  )
}

export default Home