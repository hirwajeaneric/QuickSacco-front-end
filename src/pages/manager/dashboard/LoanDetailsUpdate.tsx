import { useGetLoanApplicationData, useUpdateApplication } from "@/api/application";
import UpdateApplicationForm from "@/components/forms/UpdateApplicationForm";
import { Application } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const LoanDetailsUpdate = () => {
  const [loanId, setLoanId] = useState<string>("");
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setLoanId(params.id);
    }
  }, [params.id]);
  
  const { isLoading: isLoadingUpdate, updateApplication } = useUpdateApplication();
  const { isLoading: isLoadingApplicationData, currentApplication } = useGetLoanApplicationData(loanId);
  
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Update loan data</h1>
      </div>
      <UpdateApplicationForm onSave={updateApplication} isLoading={isLoadingUpdate} currentApplication={application} />
    </div>
  )
}

export default LoanDetailsUpdate