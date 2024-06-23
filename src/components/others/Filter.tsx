import { DataFilterTypes } from "@/pages/manager/dashboard/Home";
import React, { useState } from "react";

type Props = {
    dataFilter: DataFilterTypes | null;
    setDataFilter: React.Dispatch<React.SetStateAction<DataFilterTypes>>;
}

const Filter = ({ dataFilter, setDataFilter }: Props) => {
    const [period, setPeriod] = useState({
        Year: "",
        Month: ""
    })
    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPeriod({ ...period, [e.target.name]: e.target.value })
        handleFilterChange(e.target.name, e.target.value);
    }

    const handleFilterChange = (choice: string, value?: string) => {
        if (choice === 'This week') {
            setDataFilter({ type: 'This week', value: value || '' });
        } else if (choice === 'Month') {
            setDataFilter({ type: 'Month', value: value || '' });
        } else if (choice === 'Year') {
            setDataFilter({ type: 'Year', value: value || '' });
        }
    }

return (
    <div className="flex gap-1 items-center bg-slate-300 p-1 rounded-md">
        <span className="mx-2">Filter</span>
        
        <button onClick={() => handleFilterChange("This week")} className={`${dataFilter?.type === 'This week' ? 'bg-slate-200' : 'bg-white'} rounded-md text-sm py-1 px-3 cursor-pointer`}>This week</button>
        
        <select onChange={handlePeriodChange} name="Month" className={`${dataFilter?.type === 'Month' ? 'bg-slate-200' : 'bg-white'} text-sm py-1 px-3 z-10 rounded-sm`}>
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
        
        <select onChange={handlePeriodChange} name="Year" className={`${dataFilter?.type === 'Year' ? 'bg-slate-200' : 'bg-white'} text-sm py-1 px-3 z-10 rounded-sm`}>
            <option value="">Year</option>
            <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
            <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
            <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
            <option value={new Date().getFullYear() - 3}>{new Date().getFullYear() - 3}</option>
            <option value={new Date().getFullYear() - 4}>{new Date().getFullYear() - 4}</option>
        </select>
    </div>
)
}

export default Filter