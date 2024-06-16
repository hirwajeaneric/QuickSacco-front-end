import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { useEffect, useState } from "react";

const UserInfo = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/step-')[1];

    const [valid, setValid] = useState(false);
    const { getValues } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("First name") !== '' && getValues("Last name") !== '' && getValues("Email") !== '' && getValues("Mobile number") !== '') {
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
                <h2 className='text-2xl font-bold'>Contact Information</h2>
                <FormDescription>
                    Provide your contact information
                </FormDescription>
            </div>

            <div className='flex flex-col gap-2'>
                <FormField
                    control={formMethods.control}
                    name="First name"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Last name"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Email"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Mobile number"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Mobile number</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    maxLength={10}
                                    placeholder="Use format 07xxxxxxxx" />
                            </FormControl>
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

export default UserInfo;