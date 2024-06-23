import { UpdateApplicationFormData, User } from "@/types"
import StatCard from "../StatCard"
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
        title: "Teachers",
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
    teachers: User[],
    filter: DataFilterTypes
}

const ManagerStats = ({ loans, teachers, filter }: Props) => {
    const [stats, setStats] = useState(defaultStatistics);

    useEffect(() => {
        const filteredLoans: UpdateApplicationFormData[] = loanFilterPerPeriod(loans, filter);
        const totalLoans = filteredLoans.length;
        const totalTeachers = teachers.length;
        const pendingLoans = filteredLoans.filter(loan => loan.loanStatus === "Pending").length;
        setStats(prevStats => prevStats.map((stat, index) => {
            switch (index) {
                case 0:
                    return { ...stat, number: totalLoans };
                case 1:
                    return { ...stat, number: totalTeachers };
                case 2:
                    return { ...stat, number: pendingLoans };
                default:
                    return stat;
            }
        }));
    }, [filter, filter.type, filter.value, loans, teachers]);

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
