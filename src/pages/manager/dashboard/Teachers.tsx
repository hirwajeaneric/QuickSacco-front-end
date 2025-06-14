import ApplicantTable from "@/components/tables/applicantApplications/pages"
import { useGetApplicants } from "@/api/auth";

const Applicants = () => {
  const { applicants, isLoading } = useGetApplicants();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-xl">Applicants</h1>
        </div>
        <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Applicants</h1>
      </div>
      {applicants && <ApplicantTable data={applicants} />}
    </div>
  );
}

export default Applicants