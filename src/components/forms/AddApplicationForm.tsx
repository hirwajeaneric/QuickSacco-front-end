import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import LoadingButton from '../LoadingButton';
import { Application } from '@/types';

const formSchema = z.object({
    email: z.string().optional(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(10, "Phone number is required")
});

// Determining the type of our form data by infering it from the zod schema 
type ApplicationFormData = z.infer<typeof formSchema>;

type Props = {
    currentApplication: Application;
    onSave: (ApplicationData: ApplicationFormData) => void;
    isLoading: boolean;
};

const AddApplicationForm = ({ onSave, isLoading, currentApplication }: Props) => {
    const form = useForm<ApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentApplication,
    });

    useEffect(() => {
        form.reset(currentApplication);
    }, [currentApplication, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className='space-y-4 bg-gray-50 rounded-lg md:p-10'>
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

export default AddApplicationForm