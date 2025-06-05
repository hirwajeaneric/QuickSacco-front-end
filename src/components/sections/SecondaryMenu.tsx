import { Mail, Phone } from "lucide-react"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineX } from "react-icons/ai"
import { Link } from "react-router-dom"

const SecondaryMenu = () => {
  return (
    <div className="bg-blue-600 text-white hidden md:block py-4">
        <div className="container flex justify-end py-1 flex-wrap gap-7">
          <p className="text-sm">Contact or connect to us:</p>
          <div className="flex gap-3 text-sm">
            <Link to={"mailto:info@quicksacco.com"} className="flex gap-3 items-center">
              <Mail className="text-sm"/> info@quicksacco.com
            </Link>
            <span className="flex gap-3 items-center">
              <Phone /> +(250) 780 678 889
            </span>
          </div>
          <div className="flex gap-3 text-xl">
            <Link to={'/'}><AiOutlineInstagram /></Link>
            <Link to={'/'}><AiOutlineFacebook /></Link>
            <Link to={'/'}><AiOutlineX /></Link>
          </div>
        </div>
      </div>
  )
}

export default SecondaryMenu