import { Link } from "react-router-dom"

type Props = {
    handleClose: () => void
}

const MobileMenu = ({handleClose}: Props) => {
    return (
        <>
            {/* Mobile Menu  */}
            <div className="md:hidden container fixed left-0 top-14 w-full bg-blue-900 text-white">
                <span className="flex flex-col gap-5 py-10">
                    <Link to={'/'} onClick={handleClose} className="text-white py-2 hover:bg-blue-500 focus:bg-blue-500">Home</Link>
                    <Link to={'/'} onClick={handleClose} className="text-white py-2 hover:bg-blue-500 focus:bg-blue-500">Services</Link>
                    <Link to={'/about'} onClick={handleClose} className="text-white py-2 hover:bg-blue-500 focus:bg-blue-500">About Us</Link>
                    <Link to={'/apply'} onClick={handleClose} className="text-white py-2 hover:bg-blue-500 focus:bg-blue-500">Get started</Link>
                    <Link to={'/signup'} onClick={handleClose} className="text-white py-2 hover:bg-blue-500 focus:bg-blue-500">Login</Link>
                </span>
            </div>
        </>
    )
}

export default MobileMenu