import { UpdateApplicationFormData, User } from "@/types"
import StatCard from "../others/StatCard"
import { useEffect, useState } from "react"
import { DataFilterTypes } from "@/pages/manager/dashboard/Home"
import { loanFilterPerPeriod } from "@/utils/helperFunctions"

const defaultStatistics = [
    {
        title: "Loans",
        number: 0,
        icon: "FileText"
    },
    {
        title: "Applicants",
        number: 0,
        icon: "UsersIcon"
    },
    {
        title: "Pending Loans",
        number: 0,
        icon: "FileClock"
    }
]

type Props = {
    loans: UpdateApplicationFormData[],
    applicants: User[],
    filter: DataFilterTypes
}

const ManagerStats = ({ loans, applicants, filter }: Props) => {
    const [stats, setStats] = useState(defaultStatistics);

    useEffect(() => {
        const filteredLoans: UpdateApplicationFormData[] = loanFilterPerPeriod(loans, filter);
        const totalLoans = filteredLoans.length;
        const totalApplicants = applicants.length;
        const pendingLoans = filteredLoans.filter(loan => loan.loanStatus === "Pending").length;
        setStats(prevStats => prevStats.map((stat, index) => {
            switch (index) {
                case 0:
                    return { ...stat, number: totalLoans };
                case 1:
                    return { ...stat, number: totalApplicants };
                case 2:
                    return { ...stat, number: pendingLoans };
                default:
                    return stat;
            }
        }));
    }, [filter, filter.type, filter.value, loans, applicants]);

    return (
        <div className="flex w-full justify-between flex-wrap">
            {stats && stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    number={stat.number}
                    icon={stat.icon}
                />
            ))}
        </div>
    )
}

export default ManagerStats;
