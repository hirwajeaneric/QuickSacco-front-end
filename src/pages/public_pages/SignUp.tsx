import { useSignUp } from "@/api/auth";
import HelmetComponent from "@/components/others/HelmetComponent";
import SignUpForm from "@/components/forms/applicant-auth/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpFormTypes } from "@/types";

const SignUp = () => {
  const { signUp, isLoading, isSuccess } = useSignUp();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  if (isSuccess) {
    navigate('/verifyotp');
  }

  const handleSignUp = async (formData: SignUpFormTypes) => {
    try {
      setFormError(null);
      await signUp(formData);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'An error occurred during sign up');
    }
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <HelmetComponent title="Create account" description="Register yourself to start applying" />

      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl text-center md:text-start my-3 font-bold">Create your account now</h1>
        {formError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{formError}</span>
          </div>
        )}
        <SignUpForm
          onSignUp={handleSignUp}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default SignUp