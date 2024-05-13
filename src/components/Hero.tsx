import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <div className="pt-6 pb-24  bg-blue-900">
            <div className="container mx-auto flex flex-wrap-reverse justify-between items-center">
                <div className="w-full md:w-1/2 flex gap-10 flex-col">
                    <h1 className="text-5xl font-bold text-white w-full md:w-4/5 text-center md:text-left">The only way to apply for your SACCO Loan and get it in just days.</h1>
                    <p className="text-2xl text-white w-full md:w-4/5 text-center md:text-left">Online loan application system braught to you to reduce the time you spend applying form loans, filling paper works, and more</p>
                    <button className="rounded-lg text-black bg-yellow-500 py-2 px-4 w-fit flex items-center gap-4">
                        <span className="text-xl">Start the process here</span>
                        <ArrowRight className="" />
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/public/1111.png" className="w-3/4 mx-auto mb-10" alt="Image by pch.vector on Freepik" />
                </div>
            </div>
        </div>
    )
}

export default Hero;