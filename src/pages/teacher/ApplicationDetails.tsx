import { useGetLoanApplicationData } from "@/api/application";
import { Link, useParams } from "react-router-dom";

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
        {currentApplication && <div className="flex flex-col gap-3 w-full">
          <h2 className="text-base font-bold mt-4">Personal info</h2>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">First Name: </span>
            <span>{currentApplication.firstName}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Last Name: </span>
            <span>{currentApplication.lastName}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Gender: </span>
            <span>{currentApplication.gender}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Marital Status: </span>
            <span>{currentApplication.maritalStatus}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Date of Birth: </span>
            <span>{new Date(currentApplication.dateOfBirth).toDateString()}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Family size: </span>
            <span>{currentApplication.numberOfDependencies}</span>
          </div>
      
          <h2 className="text-base font-bold mt-4">Address and status</h2>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">National Id: </span>
            <span>{currentApplication.nationalId}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Email: </span>
            <span>{currentApplication.email}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Phone: </span>
            <span>{currentApplication.phone}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Bank account number: </span>
            <span>{currentApplication.bankAccountNumber}</span>
          </div>

          <h2 className="text-base font-bold mt-4">Work & Position</h2>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">School: </span>
            <span>{currentApplication.workSchool}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Position: </span>
            <span>{currentApplication.position}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Monthly Salary: </span>
            <span>{currentApplication.monthlySalary} Rwf</span>
          </div>

          <h2 className="text-base font-bold mt-4">Attachments</h2>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Proof of employment/Contract </span>
            <span className="text-blue-500 font-bold"><a target="_blank" href={currentApplication.proofOfEmployment}>Attachment</a></span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Copy of national id: </span>
            <span className="text-blue-500 font-bold"><a target="_blank" href={currentApplication.copyOfNationalId}>Attachment</a></span>
          </div>
          

          <h2 className="text-base font-bold mt-4">Loan information</h2>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Applied loan: </span>
            <span>{currentApplication.amountRequested} Rwf</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Payment per month: </span>
            <span>{currentApplication.repaymentPerMonth} Rwf </span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Payment period (months): </span>
            <span>{currentApplication.repaymentPeriod}</span>
          </div>
          <div className="flex justify-start items-center gap-5 w-full text-sm">
            <span className="w-1/3">Loan Status: </span>
            {currentApplication.loanStatus === 'Pending' && <span className={`rounded-md bg-slate-400 px-3 text-white font-bold`}>{currentApplication.loanStatus}</span>}
            {currentApplication.loanStatus === 'Approved' && <span className={`rounded-md bg-green-400 px-3 text-white font-bold`}>{currentApplication.loanStatus}</span>}
            {currentApplication.loanStatus === 'Rejected' && <span className={`rounded-md bg-red-400 px-3 text-white font-bold`}>{currentApplication.loanStatus}</span>}
            {currentApplication.loanStatus === 'Update required' && <span className={`rounded-md bg-blue-400 px-3 text-white font-bold`}>{currentApplication.loanStatus}</span>}
          </div>
        </div>}

        <Link to={`/account/application/update/${currentApplication?._id}`} className="bg-black rounded text-white px-3 py-2 mt-4 w-fit hover:bg-slate-600">Update data</Link>
      </div>
    </section>
  )
}

export default ApplicationDetails