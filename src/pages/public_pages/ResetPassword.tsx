import { useResetPassword } from "@/api/auth";
import HelmetComponent from "@/components/HelmetComponent";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
const environment = import.meta.env.VITE_ENVIRONMENT;

const ResetPassword = () => {
  const [searchParams] = useSearchParams({
    token: "",
    id: ""
  });

  const { resetPassword, isLoading, isSuccess } = useResetPassword();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token !== null ) {
      Cookies.set("reset-token", token, {
        secure: environment === "production" ? true : false,
        expires: 1 / 24
      });
    }
  }, [searchParams])

  if (isSuccess) {
    window.location.replace('/signin');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Reset password" />

      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Create new password</h1>
        <ResetPasswordForm
          onResetPassword={resetPassword}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default ResetPassword