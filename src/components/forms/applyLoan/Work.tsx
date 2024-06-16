import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { storage } from "@/configs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Work = () => {
    const formMethods = useFormContext();
    const currentPage = window.location.pathname.split('/step-')[1];
    const [uploadProgress, setUploadProgress] = useState(0);
    const [valid, setValid] = useState(false);
    const { getValues, setValue } = formMethods;

    const areAllInputFilled = () => {
        if (getValues("Position") !== '' && getValues("Number of dependencies") !== '' && getValues("Work school") !== '' && getValues("Work contract") !== '') {
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
                    setValue("Work contract", uploaded);
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
                <h2 className='text-2xl font-bold'>Employment information</h2>
                <FormDescription>
                    Details about your employment status
                </FormDescription>
            </div>
            <div className='flex flex-col gap-2'>
                <FormField
                    control={formMethods.control}
                    name="Position"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Position</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your current position" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Teacher">Teacher</SelectItem>
                                    <SelectItem value="School Director">School Director</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Number of dependencies"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Number of dependencies</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={formMethods.control}
                    name="Work school"
                    render={({ field }) => (
                        <FormItem onChange={areAllInputFilled}>
                            <FormLabel>Work school</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={formMethods.control}
                    name="Work contract"
                    render={() => (
                        <FormItem>
                            <FormLabel>
                                Work contract &nbsp;
                                {(uploadProgress > 0 && uploadProgress < 100) && <span className="text-sm text-gray-400">Uploading {uploadProgress} %</span>}&nbsp;
                                {getValues("Work contract") && <span className="text-sm text-green-400">Uploaded (Do not upload again)</span>}
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

export default Work;