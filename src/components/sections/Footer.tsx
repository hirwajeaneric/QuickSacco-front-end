import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="py-6 bg-blue-600">
      <div className="px-5 md:container mx-auto flex justify-between items-center flex-wrap gap-5">
        <Link to={'/'} className="text-3xl font-bold tracking-tight text-white">QuickSacco</Link>
        <p className="text-white">&copy; Copyrights Reserved - Quick Sacco {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer