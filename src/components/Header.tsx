import { Link } from "react-router-dom";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="bg-blue-900">
      {/* Secondary menu at the top  */}
      <SecondaryMenu />

      <div className="py-6 container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-white">QuickSacco</Link>

        {/* Mobile menu  */}
        <MobileMenu />

        {/* Desktop menu  */}
        <PrimaryMenu />
      </div>

    </div>
  )
}

export default Header