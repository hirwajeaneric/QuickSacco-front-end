import SignUpForm from "@/components/forms/SignUpForm";

const SignUp = () => {

  return (
    <div className="flex gap-5 w-full items-center justify-center">
      <div className="flex mx-auto w-1/2">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col mx-auto w-1/2 p-10">
        <h1 className="text-3xl font-bold">Create your account now</h1>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUp