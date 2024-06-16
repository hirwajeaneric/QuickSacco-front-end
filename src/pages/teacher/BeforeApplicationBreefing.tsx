import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const BeforeApplicationBreefing = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-gray-500">Key information you need to know before you apply.</h2>
            <ol className="flex flex-col gap-3">
                <li className="list-decimal">
                    What is the interest rate for the entire loan.
                    <p className="text-sm text-gray-800">The interest rate is 10% for the entire loan.</p>
                </li>
                <li className="list-decimal">
                    How much money shall I be paying per month?
                    <p className="text-sm text-gray-800">In order to facilitate and improve the well-being of teachers, MWARIMU SACCO charges 50% of your salary every month.</p>
                </li>
                <li className="list-decimal">
                    Required documents?
                    <ol className="text-sm text-gray-800">
                        <li className="list-disc">Copy of national id</li>
                        <li className="list-disc">Work contract</li>
                    </ol>
                </li>
            </ol>
            <Button type="button" onClick={() => navigate('/apply/step-1')} className="w-fit mt-3">Continue</Button>
        </div>
    )
}

export default BeforeApplicationBreefing