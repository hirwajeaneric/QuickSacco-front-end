import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingButton from '../LoadingButton';
import { Application } from '@/types';

const formSchema =  z.object({
    firstName: z.string().trim().min(1, 'First name is required').max(255, 'First name is too long'),
    lastName: z.string().trim().min(1, 'Last name is required').max(255, 'Last name is too long'),
    nationalId: z.string().trim().min(16, 'National ID must be 16 characters long').max(16, 'National ID must be 16 characters long'),
    email: z.string().email('Invalid email format').trim(),
    teacherId: z.string().trim(),
    phone: z.string().trim().min(10, 'Phone number must be 10 digits long'),
    dateOfBirth: z.date(),
    gender: z.enum(['Male', 'Female', 'Other']), // Use enum for valid gender options
    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']), // Use enum for valid marital status options
    numberOfDependencies: z.number().nonnegative('Number of dependencies must be a whole number'),
    workSchool: z.string().trim(),
    position: z.string().trim(),
    monthlySalary: z.number().positive('Monthly salary must be a positive number'),
    amountRequested: z.number().positive('Amount requested must be a positive number'),
    repaymentReriod: z.number().positive('Repayment period must be a positive number'),
    bankAccountNumber: z.string().trim(),
    proofOffEmployment: z.string().trim(),
    copyOfNationalId: z.string().trim(),
  });

// Determining the type of our form data by infering it from the zod schema 
export type ApplicationFormData = z.infer<typeof formSchema>;

type Props = {
    currentApplication: Application;
    onSave: (ApplicationData: ApplicationFormData) => void;
    isLoading: boolean;
};

const UpdateApplicationForm = ({ onSave, isLoading, currentApplication }: Props) => {
    const form = useForm<ApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentApplication,
    });

    // useEffect(() => {
    //     form.reset(currentApplication);
    // }, [currentApplication, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className='space-y-2 bg-gray-50 rounded-lg md:p-10'>
                <FormDescription>
                    View and change your profile information here
                </FormDescription>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled className='bg-white' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {isLoading ? <LoadingButton /> : <Button type='submit' className='bg-orange-500'>Submit</Button>}
            </form>
        </Form>
    )
}

export default UpdateApplicationForm