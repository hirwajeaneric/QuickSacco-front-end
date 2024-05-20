import HelmetComponent from "@/components/HelmetComponent";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

const ForgotPassword = () => {
  // const {} = 
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Forgot Password" />

      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Forgot your password?</h1>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPassword