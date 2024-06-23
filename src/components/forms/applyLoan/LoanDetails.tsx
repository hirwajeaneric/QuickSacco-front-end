import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { calculateMonthlyRepayment } from "@/utils/helperFunctions";
import { Button } from "@/components/ui/button";

const LoanDetails = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/apply/step-')[1];
    const [monthlyRepaymentEstimate, setMonthlyRepaymentEstimate] = useState(0);

    const [valid, setValid] = useState(false);
    const { getValues } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("bankAccountNumber") !== '' && getValues("amountRequested") !== '' && getValues("monthlySalary") !== '' && getValues("suggestedRepaymentPeriod") !== '') {
            setValid(true);
        } else {
            setValid(false)
        }
    }

    useEffect(() => {
        areAllInputFilled();
    });

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <h2 className='text-2xl font-bold'>Loan details</h2>
                    <FormDescription>
                        Details about your salary and the loan you are applying for.
                    </FormDescription>
                </div>
                <span className="text-sm">
                    Step 4/4
                </span>
            </div>
            <Separator />
            <div className='flex gap-3 w-full justify-between items-start space-y-4 flex-wrap'>
                <div className="flex flex-col w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="monthlySalary"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Monthly salary</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="amountRequested"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Amount requested</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="suggestedRepaymentPeriod"
                        render={({ field }) => (
                            <FormItem
                                onChange={() => {
                                    const suggestedRepaymentPeriod = formMethods.getValues("suggestedRepaymentPeriod");
                                    const amountRequested = formMethods.getValues("amountRequested");
                                    const suggestedRepaymentPerMonth = calculateMonthlyRepayment(amountRequested, suggestedRepaymentPeriod);
                                    // console.log(repaymentPerMonth);
                                    formMethods.setValue("suggestedRepaymentPerMonth", suggestedRepaymentPerMonth);

                                    areAllInputFilled()
                                }}>
                                <FormLabel>Suggested repayment period (Months)</FormLabel>
                                <FormControl>
                                    <Input type="number" min={1} max={150} {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the suggested repayment period based on your monthly salary or other income.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col gap-2">
                        <FormLabel>Suggested monthly payment</FormLabel>
                        <div className="flex justify-between bg-slate-300 rounded-sm p-1 items-center">
                            <Button
                                onClick={() => { setMonthlyRepaymentEstimate(formMethods.getValues("suggestedRepaymentPerMonth")) }}
                                type="button"
                                variant={'outline'}
                            >Calculate monthly payment</Button>
                            <span className="px-9 text-white bg-slate-500 rounded-sm py-1 mr-1">{monthlyRepaymentEstimate}</span>
                        </div>
                        <FormDescription>
                            View your estimated payment per month
                        </FormDescription>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="bankAccountNumber"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Bank account number</FormLabel>
                                <FormControl>
                                    <Input maxLength={16} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="comment"
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <MultiStepFormControls currentPage={currentPage} valid={valid} />
            </div>
        </div>
    )
}

export default LoanDetails;