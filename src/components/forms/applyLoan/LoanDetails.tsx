import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { Textarea } from "@/components/ui/textarea";

const LoanDetails = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/step-')[1];

    const [valid, setValid] = useState(false);
    const { getValues } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("Bank account number") !== '' && getValues("Amount requested") !== '' && getValues("Monthly salary") !== '' && getValues("Suggested repayment period") !== '') {
            setValid(true);
        } else {
            setValid(false)
        }
    }

    useEffect(() => {
        areAllInputFilled();
    });

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Loan details</h2>
                <FormDescription>
                    Provide more details about your salary and the loan you are applying for.
                </FormDescription>
            </div>
            <div className='flex flex-col gap-2'>
                <FormField
                    control={formMethods.control}
                    name="Monthly salary"
                    render={({ field }) => (
                        <FormItem  onChange={areAllInputFilled}>
                            <FormLabel>Monthly salary</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="Amount requested"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Amount requested</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="Suggested repayment period"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Suggested repayment period</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the suggested repayment period based on your monthly salary or other income.
                            </FormDescription>
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="Bank account number"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Bank account number</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="Comment"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Your comment</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Do you have any suggestion or query, don't hesitate to let us know.
                            </FormDescription>
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex justify-between items-center'>
                <MultiStepFormControls currentPage={currentPage} valid={valid} />
            </div>
        </div>
    )
}

export default LoanDetails;