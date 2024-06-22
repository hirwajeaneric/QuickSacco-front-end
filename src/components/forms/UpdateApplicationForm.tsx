import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingButton from '../LoadingButton';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from '../ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { formSchema } from '@/utils/validationSchamas';
import { UpdateApplicationFormData } from '@/types';

type Props = {
    currentApplication: UpdateApplicationFormData;
    onSave: (ApplicationData: UpdateApplicationFormData) => void;
    isLoading: boolean;
};

const UpdateApplicationForm = ({ onSave, isLoading, currentApplication }: Props) => {
    const form = useForm<UpdateApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentApplication,
    });

    const onSubmit = async (data: UpdateApplicationFormData) => {
        // data.dateOfBirth = new Date(data.dateOfBirth);
        onSave(data);
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 bg-gray-50 rounded-lg p-5 md:p-5'>
            <div className='flex flex-wrap w-full justify-between items-start gap-3'>
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
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
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
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
                    name='email'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex flex-wrap w-full justify-between items-start gap-3'>
                <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={10} minLength={10} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='nationalId'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>National Id</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={16} minLength={16} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name='dateOfBirth'
                    render={({ field }) => (
                        <FormItem className='flex flex-col w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Date of birth</FormLabel>
                            <FormControl>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full md:w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            {...field}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className='flex flex-wrap w-full justify-between items-start gap-3'>
                <FormField
                    control={form.control}
                    name='gender'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    defaultValue={field.value}
                                    className="flex flex-col md:flex-row space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Male</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Female</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Other" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Other</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='maritalStatus'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Marital Status</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Single" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Single</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Married" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Married</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Divorced" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Divorced</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Widowed" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Widowed</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className='flex flex-wrap w-full justify-between items-start  gap-3'>
                <FormField
                    control={form.control}
                    name='numberOfDependencies'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Number of dependencies</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} className='bg-white' />
                            </FormControl>
                            <FormDescription>
                                The number of family members or other people who depend on your income/salary.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='workSchool'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Work school</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormDescription>
                                The name of the school you teach at
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='position'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} {...field}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select position or occupation" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Teacher">Teacher</SelectItem>
                                        <SelectItem value="School Director">School Director</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className='flex flex-wrap w-full justify-between items-start gap-3'>
                <FormField
                    control={form.control}
                    name='monthlySalary'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Monthly Salary</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='amountRequested'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Amount requested</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='repaymentPeriod'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[31%]'>
                            <FormLabel>Repayment Period</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex flex-wrap w-full justify-start items-start gap-3'>
                <FormField
                    control={form.control}
                    name='bankAccountNumber'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[49%]'>
                            <FormLabel>Bank account number</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='repaymentPerMonth'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[49%]'>
                            <FormLabel>Repayment Per Month</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex flex-wrap w-full justify-start items-start gap-3'>
                <FormField
                    control={form.control}
                    name='proofOfEmployment'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[49%]'>
                            <FormLabel>Proof of employment</FormLabel>
                            <FormControl>
                                <Input
                                    type='file'
                                    accept='.jpg, .jepg, .png, .gif'
                                    onChange={(event) =>
                                        field.onChange(event.target.files ? event.target.files[0] : null)
                                    }
                                    className='bg-white'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='copyOfNationalId'
                    render={({ field }) => (
                        <FormItem className='w-full sm:w-[49%] md:w-[49%]'>
                            <FormLabel>Copy of national Id</FormLabel>
                            <FormControl>
                                <Input
                                    type='file'
                                    accept='.jpg, .jepg, .png, .gif'
                                    onChange={(event) =>
                                        field.onChange(event.target.files ? event.target.files[0] : null)
                                    }
                                    className='bg-white'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            {isLoading ? <LoadingButton /> : <Button type='submit' className='bg-orange-500'>Submit</Button>}
        </form>
    </Form>
    )
}

export default UpdateApplicationForm