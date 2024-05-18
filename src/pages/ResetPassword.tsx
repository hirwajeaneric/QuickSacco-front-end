import HelmetComponent from "@/components/HelmetComponent";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Reset password" />

      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Create new password</h1>
        <ResetPasswordForm />
      </div>
    </div>
  )
}

export default ResetPassword