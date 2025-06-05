import { FileDown } from "lucide-react"
import { SetStateAction } from "react";

type Props = {
    setReportType: React.Dispatch<SetStateAction<string>>
}

const ReportChoice = ({ setReportType }:Props) => {
    const handleChangeOfReportChoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setReportType(e.target.value);
    }

    return (
        <div className="flex justify-center gap-1 bg-slate-400 p-1 rounded-sm items-center">
            <FileDown className="text-white"/>
            <select onChange={handleChangeOfReportChoice} name="reportType" className="text-sm px-3 py-1 border-1 rounded-sm border-slate-400">
                <option value="">Choose Report</option>
                <option value="Loans">Print Loans</option>
                <option value="Applicants">Print Applicants</option>
            </select>
        </div>
    )
}

export default ReportChoice