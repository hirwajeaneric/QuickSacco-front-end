import { Link } from "react-router-dom"

const PrimaryMenu = () => {
    return (
        <>
            {/* Desktop menu  */}
            <div className="hidden md:block">
                <span className="flex gap-5">
                    <Link to={'/'} className="text-white">Home</Link>
                    <Link to={'/'} className="text-white">Services</Link>
                    <Link to={'/about'} className="text-white">About Us</Link>
                    <Link to={'/apply'} className=" text-white">Get started</Link>
                </span>
            </div>

            <Link to={'/signin'} className="hidden md:block rounded-sm bg-slate-100 text-blue-950 px-3 py-2">Sign In</Link>
        </>
    )
}

export default PrimaryMenu