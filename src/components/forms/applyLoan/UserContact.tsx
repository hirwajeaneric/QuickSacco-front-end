import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const UserInfo = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/apply/step-')[1];

    const [valid, setValid] = useState(false);
    const { getValues } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("firstName") !== '' && getValues("lastName") !== '' && getValues("email") !== '' && getValues("phone") !== '') {
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
                <div>
                    <h2 className='text-2xl font-bold'>Contact Information</h2>
                    <FormDescription>
                        Provide your contact information
                    </FormDescription>
                </div>
                <span className="text-sm">
                    Step 1/4
                </span>
            </div>
            <Separator />

            <div className='flex gap-3 w-full justify-between items-start flex-wrap'>
                <div className="flex flex-col w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Mobile number</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        maxLength={10}
                                        placeholder="Use format 07xxxxxxxx" />
                                </FormControl>
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

export default UserInfo;