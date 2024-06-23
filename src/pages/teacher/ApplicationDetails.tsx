import { useGetLoanApplicationData } from "@/api/application";
import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
  const params = useParams();
  const { currentApplication, isLoading } = useGetLoanApplicationData(params.id as string)

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col justify-start w-full gap-3">
        <div className="flex flex-col">
          <h2 className='text-2xl font-bold'>Application details</h2>
          <p className="text-sm text-gray-600">View updates about your loan requests here</p>
        </div>
        {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
        {currentApplication &&
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col gap-3 w-full md:w-[49%]">
              <h2 className="text-base font-bold mt-4">Personal info</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">First Name: </span>
                <span>{currentApplication?.firstName}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Last Name: </span>
                <span>{currentApplication?.lastName}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Gender: </span>
                <span>{currentApplication?.gender}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Marital Status: </span>
                <span>{currentApplication?.maritalStatus}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Date of Birth: </span>
                <span>{new Date(currentApplication?.dateOfBirth).toDateString()}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Family size: </span>
                <span>{currentApplication?.numberOfDependencies}</span>
              </div>

              <h2 className="text-base font-bold mt-4">Address and status</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">National Id: </span>
                <span>{currentApplication?.nationalId}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Email: </span>
                <span>{currentApplication?.email}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Phone: </span>
                <span>{currentApplication?.phone}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Bank account number: </span>
                <span>{currentApplication?.bankAccountNumber}</span>
              </div>

              <h2 className="text-base font-bold mt-4">Work & Position</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">School: </span>
                <span>{currentApplication?.workSchool}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Position: </span>
                <span>{currentApplication?.position}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Monthly Salary: </span>
                <span>{currentApplication?.monthlySalary} Rwf</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[49%]">
              <h2 className="text-base font-bold mt-4">Attachments</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Proof of employment/Contract </span>
                <span className="text-blue-500 font-bold"><a target="_blank" href={currentApplication?.proofOfEmployment}>Attachment</a></span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Copy of national id: </span>
                <span className="text-blue-500 font-bold"><a target="_blank" href={currentApplication?.copyOfNationalId}>Attachment</a></span>
              </div>


              <h2 className="text-base font-bold mt-4">Loan information</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Applied loan: </span>
                <span>{currentApplication?.amountRequested} Rwf</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Suggested payment per month: </span>
                <span>{currentApplication?.suggestedRepaymentPerMonth} Rwf </span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Suggested payment period (months): </span>
                <span>{currentApplication?.suggestedRepaymentPeriod}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Bank calculated payment per month: </span>
                <span>{currentApplication?.repaymentPerMonth} Rwf </span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Bank calculated payment period (months): </span>
                <span>{currentApplication?.repaymentPeriod}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Loan Status: </span>
                {currentApplication?.loanStatus === 'Pending' && <span className={`rounded-md bg-slate-400 px-3 text-white font-bold`}>{currentApplication?.loanStatus}</span>}
                {currentApplication?.loanStatus === 'Approved' && <span className={`rounded-md bg-green-400 px-3 text-white font-bold`}>{currentApplication?.loanStatus}</span>}
                {currentApplication?.loanStatus === 'Rejected' && <span className={`rounded-md bg-red-400 px-3 text-white font-bold`}>{currentApplication?.loanStatus}</span>}
                {currentApplication?.loanStatus === 'Update required' && <span className={`rounded-md bg-blue-400 px-3 text-white font-bold`}>{currentApplication?.loanStatus}</span>}
              </div>

              <h2 className="text-base font-bold mt-4">Manager info</h2>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Name: </span>
                <span>{currentApplication?.managerId?.firstName} {currentApplication?.managerId?.lastName}</span>
              </div>
              <div className="flex justify-start items-center gap-5 w-full text-sm">
                <span className="w-1/2">Email: </span>
                <span>{currentApplication?.managerId?.email}</span>
              </div>
            </div>
          </div>}

        {/* <Link to={`/account/application/update/${currentApplication?._id}`} className="bg-black rounded text-white px-3 py-2 mt-4 w-fit hover:bg-slate-600">Update data</Link> */}
      </div>
    </section>
  )
}

export default ApplicationDetails