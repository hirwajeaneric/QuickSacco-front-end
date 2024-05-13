import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="py-6 bg-blue-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-white">QuickSacco</Link>

        {/* Mobile Menu  */}
        <div className="md:hidden">

        </div>

        {/* Desktop menu  */}
        <div className="hidden md:block">
          <span className="flex gap-5">
            <Link to={'/'} className="text-white">Home</Link>
            <Link to={'/'} className="text-white">Services</Link>
            <Link to={'/about'} className="text-white">About Us</Link>
            <Link to={'/apply'} className=" text-white">Get started</Link>
          </span>
        </div>

        <Link to={'/signup'} className="rounded-sm bg-slate-100 text-blue-950 px-3 py-2">Get started</Link>
      </div>
    </div>
  )
}

export default Header