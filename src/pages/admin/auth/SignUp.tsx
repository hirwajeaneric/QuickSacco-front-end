import { useSignUp } from "@/api/auth";
import HelmetComponent from "@/components/others/HelmetComponent";
import AdminSignUpForm from "@/components/forms/admin-auth/AdminSignUpForm";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, isLoading, isSuccess } = useSignUp();
  const navigate = useNavigate();

  if (isSuccess) {
    navigate('/admin/auth/verifyotp');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Create account" description="Register yourself to start applying" />

      <div className="flex flex-col mx-auto w-full items-center">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-blue-800 text-center">QuickSacco</Link>
        <h1 className="text-xl text-center md:text-start my-3 font-bold">Create your account now</h1>
        <AdminSignUpForm onSignUp={signUp} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default SignUp