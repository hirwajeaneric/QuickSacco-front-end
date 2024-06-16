import { useResetPassword } from "@/api/auth";
import HelmetComponent from "@/components/HelmetComponent";
import AdminResetPasswordForm from "@/components/forms/admin-auth/AdminResetPasswordForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useSearchParams } from "react-router-dom";
const environment = import.meta.env.VITE_ENVIRONMENT;

const ResetPassword = () => {
  const [searchParams] = useSearchParams({
    token: "",
    id: ""
  });

  const { resetPassword, isLoading, isSuccess } = useResetPassword();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token !== null) {
      Cookies.set("reset-token", token, {
        secure: environment === "production" ? true : false,
        expires: 1 / 24
      });
    }
  }, [searchParams])

  if (isSuccess) {
    window.location.replace('/admin/auth/signin');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Reset password" />

      <div className="flex flex-col mx-auto w-full items-center">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-blue-800 text-center">QuickSacco</Link>
        <h1 className="text-xl text-center md:text-start my-3 font-bold">Create new password</h1>
        <AdminResetPasswordForm
          onResetPassword={resetPassword}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default ResetPassword