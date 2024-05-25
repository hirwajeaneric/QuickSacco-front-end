import LoanStatusUpdateSheet from "@/components/sections/LoanStatusUpdateSheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Application } from "@/types";
import { useNavigate } from "react-router-dom";

const application: Application = {
  _id: "1",
  firstName: "Aline",
  lastName: "Uwera",
  nationalId: "1234567890123456",
  email: "alineuwera@gmail.com",
  teacherId: "T1001",
  phone: "0712345678",
  dateOfBirth: new Date("1980-05-15"),
  gender: "Female",
  maritalStatus: "Married",
  numberOfDependencies: 2,
  workSchool: "Greenwood High",
  position: "Math Teacher",
  monthlySalary: 400000,
  amountRequested: 15000000,
  amountToPayPerMonth: 200000,
  createdAt: new Date(),
  repaymentReriod: 75,
  bankAccountNumber: "1234567890",
  proofOffEmployment: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
  copyOfNationalId: "https://www.canva.com/p/templates/EAFh7cFx9So-white-and-gold-certificate-of-appreciation/",
  loanStatus: "Pending",
};

const LoanDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Loans details</h1>
        <Button variant="default" className="mt-4" onClick={() => navigate(-1)}>View all loans</Button>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-base font-bold mt-4">Personal info</h2>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">First Name: </span>
          <span>{application.firstName}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Last Name: </span>
          <span>{application.lastName}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Gender: </span>
          <span>{application.gender}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Marital Status: </span>
          <span>{application.maritalStatus}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Date of Birth: </span>
          <span>{application.dateOfBirth.toDateString()}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Family size: </span>
          <span>{application.numberOfDependencies}</span>
        </div>

        <h2 className="text-base font-bold mt-4">Address and status</h2>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">National Id: </span>
          <span>{application.nationalId}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Email: </span>
          <span>{application.email}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Phone: </span>
          <span>{application.phone}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Bank account number: </span>
          <span>{application.bankAccountNumber}</span>
        </div>

        <h2 className="text-base font-bold mt-4">Work & Position</h2>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">School: </span>
          <span>{application.workSchool}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Position: </span>
          <span>{application.position}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Monthly Salary: </span>
          <span>{application.monthlySalary} Rwf</span>
        </div>

        <h2 className="text-base font-bold mt-4">Attachments</h2>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Proof of employment/Contract </span>
          <span className="text-blue-500 font-bold"><a target="_blank" href={application.proofOffEmployment}>Attachment</a></span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Copy of national id: </span>
          <span className="text-blue-500 font-bold"><a target="_blank" href={application.copyOfNationalId}>Attachment</a></span>
        </div>


        <h2 className="text-base font-bold mt-4">Loan information</h2>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Applied loan: </span>
          <span>{application.amountRequested} Rwf</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Payment per month: </span>
          <span>{application.amountToPayPerMonth} Rwf </span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Payment period (months): </span>
          <span>{application.repaymentReriod}</span>
        </div>
        <div className="flex justify-start items-center gap-5 w-full text-sm">
          <span className="w-1/3">Loan Status: </span>
          {application.loanStatus === 'Pending' && <span className={`rounded-md bg-slate-400 px-3 text-white font-bold`}>{application.loanStatus}</span>}
          {application.loanStatus === 'Approved' && <span className={`rounded-md bg-green-400 px-3 text-white font-bold`}>{application.loanStatus}</span>}
          {application.loanStatus === 'Rejected' && <span className={`rounded-md bg-red-400 px-3 text-white font-bold`}>{application.loanStatus}</span>}
          {application.loanStatus === 'Update required' && <span className={`rounded-md bg-blue-400 px-3 text-white font-bold`}>{application.loanStatus}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full mb-5">
        <Button type="button" className="w-fit" onClick={() => navigate(`/manager/loan/update/${application._id}`)} >Update data</Button>
        <Separator />
        <p className="text-slate-700">Update loan status</p>
        <div className="flex justify-between">
          <LoanStatusUpdateSheet command="Approve" loanDetails={application} />
          <LoanStatusUpdateSheet command="Request updates to" loanDetails={application} />
          <LoanStatusUpdateSheet command="Reject" loanDetails={application} />
        </div>
      </div>
    </div>
  )
}

export default LoanDetails