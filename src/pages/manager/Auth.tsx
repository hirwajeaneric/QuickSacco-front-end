import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen justify-center bg-[url('/p0202jwh.jpg')] bg-no-repeat bg-cover">
      <div className="bg-slate-50 rounded-lg p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth