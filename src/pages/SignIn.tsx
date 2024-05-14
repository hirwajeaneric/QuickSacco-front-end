import SignInForm from "@/components/forms/SignInForm";

const SignIn = () => {

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="flex mx-auto w-full md:w-1/2">
        <img src="/Business innovation based on alternative financial services-small.png" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full md:w-1/2">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn