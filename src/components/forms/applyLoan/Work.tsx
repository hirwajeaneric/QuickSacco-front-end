import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { storage } from "@/configs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Separator } from "@/components/ui/separator";

const Work = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/apply/step-')[1];
    const [uploadProgress, setUploadProgress] = useState(0);
    const [valid, setValid] = useState(false);
    const { getValues, setValue } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("position") !== '' && getValues("numberOfDependencies") !== '' && getValues("workSchool") !== '' && getValues("proofOfEmployment") !== '') {
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
                    setValue("proofOfEmployment", uploaded);
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
        <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className='text-2xl font-bold'>Employment information</h2>
                    <FormDescription>
                        Details about your employment status
                    </FormDescription>
                </div>
                <span className="text-sm">
                    Step 3/4
                </span>
            </div>
            <Separator />
            <div className='flex gap-2 w-full justify-between items-start space-y-4 flex-wrap'>
                <div className="flex flex-col align-top justify-start w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Position</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your position on the contract.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formMethods.control}
                        name="numberOfDependencies"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Number of dependencies</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} {...field} />
                                </FormControl>
                                <FormDescription>
                                    Number of people who depend on your income or salary
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col align-top justify-start w-full md:w-[49%] space-y-4">
                    <FormField
                        control={formMethods.control}
                        name="workSchool"
                        render={({ field }) => (
                            <FormItem onChange={areAllInputFilled}>
                                <FormLabel>Company/Organization</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name of the company/organization you work for.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={formMethods.control}
                        name="proofOfEmployment"
                        render={() => (
                            <FormItem>
                                <FormLabel>
                                    Work contract &nbsp;
                                    {(uploadProgress > 0 && uploadProgress < 100) && <span className="text-sm text-gray-400">Uploading {uploadProgress} %</span>}&nbsp;
                                    {getValues("proofOfEmployment") && <span className="text-sm text-green-400">Uploaded (Do not upload again)</span>}
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

export default Work;