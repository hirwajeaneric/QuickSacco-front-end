import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { storage } from "@/configs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const PersonalInformation = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/step-')[1];
    const [uploadProgress, setUploadProgress] = useState(0);
    const [valid, setValid] = useState(false);
    const { getValues, setValue } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("gender") !== '' && getValues("maritalStatus") !== '' && getValues("nationalId") !== '' && getValues("Date of birth") !== '' && getValues("Copy of national id")) {
            setValid(true);
        } else {
            setValid(false)
        }
    }

    const uploadToFirebase = async (file: File) => {
        if (!file) return;

        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setUploadProgress(progress);
            },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            resolve(downloadURL);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
        });
    };

    const handleImageFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.target.files) {
            uploadToFirebase(e.target.files[0] ?? null)
                .then((uploaded) => {
                    setValue("Copy of national id", uploaded);
                    areAllInputFilled();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        areAllInputFilled();
    });

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Personal Information</h2>
                <FormDescription>
                    Provide your identification information
                </FormDescription>
            </div>
            <div className='flex flex-col gap-2'>
                <FormField
                    control={formMethods.control}
                    name="Gender"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled} className="space-y-3">
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    name="Gender"
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Male
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Female
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Other" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Other
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Date of birth"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled} className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
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
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="National Id"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>National Id</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    maxLength={10}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Marital Status"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled} className="space-y-3">
                            <FormLabel>Marital Status</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Single" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Single
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Married" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Married
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Divorced" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Divorced
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Widowed" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Widowed
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Copy of national id"
                    render={() => (
                        <FormItem>
                            <FormLabel>
                                Copy of national id &nbsp;
                                {(uploadProgress > 0 && uploadProgress < 100) && <span className="text-sm text-gray-400">Uploading {uploadProgress} %</span>}&nbsp;
                                {getValues("Copy of national id") && <span className="text-sm text-green-400">Uploaded (Do not upload again)</span>}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    onChange={(event) => {
                                        if (event.target.files?.[0]) {
                                            handleImageFiles(event);
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormDescription>
                                Please upload a scanned copy of your national id.
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

export default PersonalInformation;