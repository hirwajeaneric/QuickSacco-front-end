import { Mail, Phone } from "lucide-react"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineX } from "react-icons/ai"
import { Link } from "react-router-dom"

const SecondaryMenu = () => {
  return (
    <div className="bg-white hidden md:block">
        <div className="container flex justify-between py-1 flex-wrap gap-1">
          <p>Contact or connect to us via: </p>
          <div className="flex gap-3">
            <Link to={"mailto:info@quicksacco.com"} className="flex gap-3 items-center"><Mail /> info@quicksacco.com</Link>
            <span className="flex gap-3 items-center"><Phone /> +(250) 780 599 859</span>
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