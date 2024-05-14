import { ProgressInfo } from "@/pages/Home";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProgressProps = {
    process: ProgressInfo;
    key: number
}

const ProgressCart = ({ process }: ProgressProps) => {
    return (
        <div className="w-full md:w-[23%] flex justify-center items-center flex-col hover:text-blue-700">
            <img src={process.picture} alt="" />
            <p className="font-bold">{process.description}</p>
            <Link className="bg-yellow-400 rounded-full py-2 px-2 mt-4 hover:translate-x-2 transition-transform" to={`${process.destination}`}>
                <ArrowRight />
            </Link>
        </div>
    )
}

export default ProgressCart;