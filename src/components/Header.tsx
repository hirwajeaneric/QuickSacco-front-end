import { Link } from "react-router-dom";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <SecondaryMenu />
      <div className="bg-blue-900 sticky top-0 z-50">
        {/* Secondary menu at the top  */}
        <div className="py-3 md:py-6 container mx-auto flex justify-between items-center">
          {/* Logo  */}
          <Link to={'/'} className="text-3xl font-bold tracking-tight text-white">QuickSacco</Link>

          {/* Mobile Menu Icon  */}
          <Menu onClick={handleClose} className="text-white text-xl cursor-pointer block md:hidden" />

          {/* Mobile menu  */}
          {isClosed && <MobileMenu handleClose={handleClose} />}

          {/* Desktop menu  */}
          <PrimaryMenu />
        </div>
      </div>
    </>
  )
}

export default Header