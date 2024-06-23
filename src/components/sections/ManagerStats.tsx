import { UpdateApplicationFormData, User } from "@/types"
import StatCard from "../StatCard"
import { useEffect, useState } from "react"

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
}

const ManagerStats = ({ loans, teachers }: Props) => {
    const [stats, setStats] = useState(defaultStatistics);
    
    useEffect(() => {
        const totalLoans = loans.length;
        const totalTeachers = teachers.length;
        const pendingLoans = loans.filter(loan => loan.loanStatus === "Pending").length;
        setStats(prevStats => prevStats.map((stat, index) => {
            switch(index) {
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
    }, [loans, teachers]);

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
