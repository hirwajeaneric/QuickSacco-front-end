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

            <Link to={'/signin'} className="hidden md:block text-blue-950 px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 font-bold">Get Started</Link>
        </>
    )
}

export default PrimaryMenu