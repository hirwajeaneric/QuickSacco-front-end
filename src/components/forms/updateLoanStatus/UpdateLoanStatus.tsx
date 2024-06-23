import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { formSchema } from '@/utils/validationSchemas';
import { UpdateApplicationFormData } from '@/types';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/LoadingButton';

type Props = {
    onSave: (ApplicationData: UpdateApplicationFormData) => void;
    loan: UpdateApplicationFormData
    isLoading: boolean;
};

export default function UpdateLoanStatus({ onSave, loan, isLoading }: Props) {

    const methods = useForm<UpdateApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: loan.firstName,
            lastName: loan.lastName,
            nationalId: loan.nationalId,
            email: loan.email,
            teacherId: loan.teacherId,
            phone: loan.phone,
            dateOfBirth: new Date(loan.dateOfBirth),
            gender: loan.gender,
            maritalStatus: loan.maritalStatus,
            numberOfDependencies: loan.numberOfDependencies,
            workSchool: loan.workSchool,
            position: loan.position,
            monthlySalary: loan.monthlySalary,
            amountRequested: loan.amountRequested,
            repaymentPeriod: loan.repaymentPeriod,
            repaymentPerMonth: loan.repaymentPerMonth,
            suggestedRepaymentPeriod: loan.suggestedRepaymentPeriod,
            suggestedRepaymentPerMonth: loan.suggestedRepaymentPerMonth,
            bankAccountNumber: loan.bankAccountNumber,
            proofOfEmployment: loan.proofOfEmployment,
            copyOfNationalId: loan.copyOfNationalId,
            loanStatus: loan.loanStatus,
            comment: loan.comment || "",
            managerComment: loan.managerComment || "",
            _id: loan._id,
        },
    });

    const onSubmit = async (data: UpdateApplicationFormData) => {
        // console.log(data);
        onSave(data);
    }

    return (
        <FormProvider {...methods}>
            <Form {...methods}>
                <form onSubmit={methods.handleSubmit(onSave)} className='flex flex-col gap-2'>
                    <Separator />
                    <div className='flex flex-col gap-3 w-full justify-between items-start space-y-4 flex-wrap'>
                        <FormField
                            control={methods.control}
                            name="loanStatus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loan status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select loan status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Approved">Approve</SelectItem>
                                            {/* <SelectItem value="Update required">Update required</SelectItem> */}
                                            <SelectItem value="Rejected">Reject</SelectItem>
                                            <SelectItem value="Pending">Pending</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="managerComment"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel>Add comment</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Add comment on loan status update"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Add reason for loan status update (optional)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {isLoading
                        ? <LoadingButton />
                        : <Button
                            className='w-fit'
                            type="submit"
                            onClick={() => {
                                onSubmit(methods.getValues());
                            }}
                        >
                            Confirm update
                        </Button>
                    }
                </form>
            </Form>
        </FormProvider>
    )
}