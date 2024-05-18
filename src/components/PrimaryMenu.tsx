import { Link } from "react-router-dom"

const PrimaryMenu = () => {
    return (
        <>
            {/* Desktop menu  */}
            <div className="hidden md:block">
                <span className="flex gap-5">
                    <a href={'/'} className="text-white">Home</a>
                    <a href={'/#process'} className="text-white">Process</a>
                    <a href={'/#benefits'} className="text-white">Benefits</a>
                    <a href={'/apply'} className=" text-white">Get Started</a>
                </span>
            </div>

            <Link to={'/signin'} className="hidden md:block text-blue-950 px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 font-bold">Sign In</Link>
        </>
    )
}

export default PrimaryMenu