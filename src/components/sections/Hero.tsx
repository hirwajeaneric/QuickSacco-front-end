import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <div className="pt-6 pb-24  bg-blue-600">
            <div className="px-5 md:container mx-auto flex flex-wrap-reverse justify-between items-center">
                <div className="w-full md:w-1/2 flex gap-10 flex-col">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white w-full md:w-4/5 text-center md:text-left">The only way to apply for your SACCO Loan and get it in just days.</h1>
                    <p className="text-base text-white w-full md:w-4/5 text-center md:text-left">Online loan application system braught to you to reduce the time you spend applying form loans, filling paper works, and more</p>
                    <a href="/apply/overview" className="rounded-lg hover:bg-yellow-400 text-black font-bold bg-yellow-500 py-2 px-4 w-full md:w-fit flex items-center gap-4 justify-center">
                        <span className="text-base">Start the process here</span>
                        <ArrowRight />
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/1111.png" loading="lazy" className="w-3/4 mx-auto mb-10" alt="Image by pch.vector on Freepik" />
                </div>
            </div>
        </div>
    )
}

export default Hero;