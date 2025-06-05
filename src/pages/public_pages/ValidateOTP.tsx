import { useValidateOTP } from "@/api/auth";
import HelmetComponent from "@/components/others/HelmetComponent";
import { ValidateOTPForm } from "@/components/forms/applicant-auth/ValidateOTPForm";
import { useNavigate } from "react-router-dom";

const ValidateOTP = () => {
  const { validateOTP, isSuccess, isLoading } = useValidateOTP();
  const navigate = useNavigate()

  if (isSuccess) {
    navigate('/signin');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Verify OTP" />

      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Verify your account</h1>
        <ValidateOTPForm onValidateOTP={validateOTP} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ValidateOTP