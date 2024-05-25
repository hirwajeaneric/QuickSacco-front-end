import { Link } from "react-router-dom"

const Success = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <svg className="text-green-700 font-bold" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        <h1 className="text-3xl font-bold text-green-700">Success</h1>
        <p>Your application has been submitted successfully!</p>
        <Link className="rounded px-3 py-2 text-black border border-black bg-transparent hover:bg-slate-700 hover:text-white" to={'/account/applications'}>View your applications</Link>
      </div>
    </div>
  )
}

export default Success