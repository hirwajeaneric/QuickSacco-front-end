import { Link } from "react-router-dom";
import PrimaryMenu from "@/components/sections/PrimaryMenu";
import SecondaryMenu from "@/components/sections/SecondaryMenu";
import MobileMenu from "@/components/sections/MobileMenu";
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
      <div className="bg-blue-600 sticky top-0 z-50">
        {/* Secondary menu at the top  */}
        <div className="py-2 md:py-4 px-5 md:container mx-auto flex justify-between items-center">
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