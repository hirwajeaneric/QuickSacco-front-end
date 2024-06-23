import { useSignUp } from "@/api/auth";
import HelmetComponent from "@/components/others/HelmetComponent";
import SignUpForm from "@/components/forms/teacher-auth/SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, isLoading, isSuccess } = useSignUp();
  const navigate = useNavigate();

  if (isSuccess) {
    navigate('/verifyotp');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Create account" description="Register yourself to start applying" />
      
      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Create your account now</h1>
        <SignUpForm  onSignUp={signUp} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default SignUp