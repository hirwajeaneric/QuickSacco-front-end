import StatCard from "@/components/others/StatCard";
import { UpdateApplicationFormData, User } from "@/types";
import { useEffect, useState } from "react";

const defaultStatistics = [
    {
        title: "Managers",
        number: 0,
        icon: "UsersIcon"
    },
    {
        title: "Applicants",
        number: 0,
        icon: "PersonStanding"
    },
    {
        title: "Loans",
        number: 0,
        icon: "FileText"
    },
]

type Props = {
    managers: User[],
    applicants: User[],
    loans: UpdateApplicationFormData[],
}

const AdminStats = ({ managers, applicants, loans }: Props) => {
    const [stats, setStats] = useState(defaultStatistics);

    useEffect(() => {
        const totalManagers = managers.length;
        const totalApplicants = applicants.length;
        const totalLoans = loans.length;
        setStats(prevStats => prevStats.map((stat, index) => {
            switch (index) {
                case 0:
                    return { ...stat, number: totalManagers };
                case 1:
                    return { ...stat, number: totalApplicants };
                case 2:
                    return { ...stat, number: totalLoans };
                default:
                    return stat;
                    break;
            }
        }));
    }, [loans.length, managers.length, applicants.length]);

    return (
        <div className="flex w-full justify-between flex-wrap">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    number={stat.number}
                    icon={stat.icon}
                />
            ))}
        </div>
    )
}

export default AdminStats