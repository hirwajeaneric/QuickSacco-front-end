import { useForgotPassword } from "@/api/auth";
import HelmetComponent from "@/components/HelmetComponent";
import ManagerForgotPasswordForm from "@/components/forms/manager-auth/ManagerForgotPasswordForm";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { forgotPassword, isLoading, isSuccess } = useForgotPassword();

  if (isSuccess) {
    window.location.replace('/manager/auth/signin');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Forgot Password" />

      <div className="flex flex-col mx-auto w-full items-center">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-blue-800 text-center">QuickSacco</Link>
        <h1 className="text-xl text-center md:text-start my-3 font-bold">Forgot your password?</h1>
        <ManagerForgotPasswordForm
          onForgotPassword={forgotPassword}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default ForgotPassword