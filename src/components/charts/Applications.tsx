import { DataFilterTypes } from '@/pages/manager/dashboard/Home';
import { UpdateApplicationFormData } from '@/types';
import { loanFilterPerPeriod } from '@/utils/helperFunctions';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  loans: UpdateApplicationFormData[];
  filter: DataFilterTypes
};

export default function ApplicationsPerMonth({ loans, filter }: Props) {
  const [loanStatuses, setLoanStatuses] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const updatedLoanStatuses = [0, 0, 0, 0];
    const filteredLoans: UpdateApplicationFormData[] = loanFilterPerPeriod(loans, filter);
  
    filteredLoans.forEach((loan: UpdateApplicationFormData) => {
      switch (loan.loanStatus) {
        case 'Approved':
          updatedLoanStatuses[2]++;
          break;
        case 'Pending':
          updatedLoanStatuses[1]++;
          break;
        case 'Rejected':
          updatedLoanStatuses[0]++;
          break;
        case 'Update required':
          updatedLoanStatuses[3]++;
          break;
        default:
          break;
      }
    });
  
    setLoanStatuses(updatedLoanStatuses);
  }, [loans, filter]);
  

  const data = {
    labels: ['Rejected', 'Pending', 'Approved', 'Update required'],
    datasets: [
      {
        label: '# of Votes',
        data: loanStatuses,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex flex-col p-3'>
      <h2 className='font-bold'>Loan statuses</h2>
      <Doughnut data={data} />
    </div>
  );
}
