import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { calculateMonthlyRepayment, calculatePaymentPeriod } from '@/utils/helperFunctions';
import { formSchema } from '@/utils/validationSchemas';
import { ApplicationFormData } from '@/types';

type Props = {
    onSave: (ApplicationData: ApplicationFormData) => void;
    isLoading: boolean;
};

type ApplicantLocalData = {
    createdAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    updatedAt: Date;
    __v: number;
    _id: string;
}

export default function AddApplicationForm({ onSave }: Props) {

    const applicant: string | null = localStorage.getItem("applicant");
    let parsedApplicantInfo: ApplicantLocalData | null = null;
    if (applicant !== null) {
        parsedApplicantInfo = JSON.parse(applicant);
    }

    useEffect(() => {
        if (localStorage.getItem("applicant") === null) {
            window.location.href = "/signin";
        }
    }, []);

    const methods = useForm<ApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: parsedApplicantInfo?.firstName,
            lastName: parsedApplicantInfo?.lastName,
            nationalId: '',
            email: parsedApplicantInfo?.email,
            applicantId: parsedApplicantInfo?._id,
            phone: parsedApplicantInfo?.phone,
            dateOfBirth: new Date(),
            gender: 'Male',
            maritalStatus: 'Single',
            numberOfDependencies: 0,
            workSchool: '',
            position: '',
            monthlySalary: 0,
            amountRequested: 0,
            repaymentPeriod: 0,
            repaymentPerMonth: 0,
            suggestedRepaymentPeriod: 0,
            suggestedRepaymentPerMonth: 0,
            bankAccountNumber: '',
            proofOfEmployment: '',
            copyOfNationalId: '',
            comment: "",
        },
    });

    const onSubmit = async (data: ApplicationFormData) => {
        const paymentPeriod = calculatePaymentPeriod(data.amountRequested, data.monthlySalary);
        data.repaymentPeriod = paymentPeriod;
        data.repaymentPerMonth = calculateMonthlyRepayment(data.amountRequested, paymentPeriod);
        
        onSave(data);
    }

    return (
        <FormProvider {...methods}>
            <Form {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-2 bg-slate-50 p-5 md:px-20 md:py-10'>
                    <Outlet />
                </form>
            </Form>
        </FormProvider>
    )
}