import { useSignIn } from "@/api/auth";
import HelmetComponent from "@/components/HelmetComponent";
import ManagerSignInForm from "@/components/forms/manager-auth/ManagerSignInForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { signIn, isLoading, isSuccess, } = useSignIn();

  if (isSuccess) {
    window.location.replace('/manager');
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Sign in to your account" />

      <div className="flex flex-col mx-auto w-full items-center">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-blue-800 text-center">QuickSacco</Link>
        <h1 className="text-xl text-center md:text-start my-3 font-bold">Sign in to your account</h1>
        <ManagerSignInForm onSignIn={signIn} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default SignIn