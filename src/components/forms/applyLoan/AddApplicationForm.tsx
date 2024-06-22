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

type TeacherLocalData = {
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

    const teacher: string | null = localStorage.getItem("teacher");
    let parsedTeacherInfo: TeacherLocalData | null = null;
    if (teacher !== null) {
        parsedTeacherInfo = JSON.parse(teacher);
    }

    useEffect(() => {
        if (localStorage.getItem("teacher") === null) {
            window.location.href = "/signin";
        }
    }, []);

    const methods = useForm<ApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: parsedTeacherInfo?.firstName,
            lastName: parsedTeacherInfo?.lastName,
            nationalId: '',
            email: parsedTeacherInfo?.email,
            teacherId: parsedTeacherInfo?._id,
            phone: parsedTeacherInfo?.phone,
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
            bankAccountNumber: '',
            proofOfEmployment: '',
            copyOfNationalId: '',
            comment: "",
        },
    });

    const onSubmit = async (data: ApplicationFormData) => {
        const paymentPeriod = calculatePaymentPeriod(data.amountRequested, data.monthlySalary);
        data.repaymentPeriod = paymentPeriod;
        data.repaymentPerMonth = calculateMonthlyRepayment(data.amountRequested, data.suggestedRepaymentPeriod);
        
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