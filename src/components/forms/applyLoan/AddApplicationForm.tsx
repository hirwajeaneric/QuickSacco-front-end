import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { calculatePaymentPeriod } from '@/utils/helperFunctions';
// import { Button } from '@/components/ui/button';

const formSchema = z.object({
    firstName: z.string({ required_error: "FirstName is required" })
        .trim()
        .min(1, 'First name is required')
        .max(255, 'First name is too long'),
    lastName: z.string()
        .trim()
        .min(1, 'Last name is required')
        .max(255, 'Last name is too long'),
    nationalId: z.string()
        .trim()
        .min(16, 'National ID must be 16 characters long')
        .max(16, 'National ID must be 16 characters long'),
    email: z.string({ required_error: "Email address is required" })
        .email('Invalid email format')
        .trim(),
    teacherId: z.string()
        .trim(),
    phone: z.string()
        .trim()
        .min(10, 'Phone number must be 10 digits long'),
    dateOfBirth: z.date({ required_error: "Date of birth is required" }),
    gender: z.enum(['Male', 'Female', 'Other']), // Use enum for valid gender options
    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']), // Use enum for valid marital status options
    numberOfDependencies: z.number({
        coerce: true,
        required_error: "Number of dependencies is required"
    }),
    workSchool: z.string({
        required_error: "Work school is required"
    })
        .trim(),
    position: z.string({
        required_error: "Position is required"
    })
        .trim(),
    monthlySalary: z.number({
        coerce: true,
        required_error: "Monthly salary is required"
    })
        .positive('Monthly salary must be a positive number'),
    amountRequested: z.number({
        coerce: true,
        required_error: "The requested amount is required"
    })
        .positive('Amount requested must be a positive number'),
    repaymentPeriod: z.number(),
    suggestedRepaymentPeriod: z.number({
        coerce: true,
        required_error: "You must provide the time you estimate to pay back is required"
    })
        .positive('Repayment period must be a positive number'),
    bankAccountNumber: z.string({
        required_error: "Bank account number is required"
    })
        .trim(),
    proofOfEmployment: z.string({
        required_error: "Proof of employment is required"
    })
        .trim(),
    copyOfNationalId: z.string({
        required_error: "Copy of national ID is required"
    })
        .trim(),
    comment: z.string()
        .trim(),
});

// Determining the type of our form data by infering it from the zod schema 
export type ApplicationFormData = z.infer<typeof formSchema>;

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
        // data.dateOfBirth = new Date(data.dateOfBirth).toDateString();
        
        console.log(data);
        console.log(methods.formState.errors);

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