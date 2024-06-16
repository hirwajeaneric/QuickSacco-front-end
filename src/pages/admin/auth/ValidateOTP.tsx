import { useValidateOTP } from "@/api/auth";
import HelmetComponent from "@/components/HelmetComponent";
import { AdminValidateOTPForm } from "@/components/forms/admin-auth/AdminValidateOTPForm";
import { Link, useNavigate } from "react-router-dom";

const ValidateOTP = () => {
  const { validateOTP, isSuccess, isLoading } = useValidateOTP();
  const navigate = useNavigate()

  if (isSuccess) {
    navigate('/admin/auth/signin');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Verify OTP" />

      <div className="flex flex-col mx-auto w-full items-center">
      <Link to={'/'} className="text-3xl font-bold tracking-tight text-blue-800 text-center">QuickSacco</Link>
        <h1 className="text-xl text-center md:text-start my-3 font-bold">Verify your account</h1>
        <AdminValidateOTPForm onValidateOTP={validateOTP} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ValidateOTP