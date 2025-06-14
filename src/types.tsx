import { z } from "zod";
import { addManagerFormSchema, formSchema, applicantSignupFormSchema, updateformSchema } from "./utils/validationSchemas";

export type User = {
    _id: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password?: string;
    verified: boolean;
    salt?: string;
    role: "Applicant" | "Manager" | "Admin";
    otp: number;
    accountStatus: "Active" | "Inactive";
    otpExpiryTime: Date;
};



export type UpdateUserTypes = {
    email?: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export type SignInTypes = {
    email: string;
    password: string;
}

export type OPTTypes = {
    otp: string;
}

export type Response = {
    _id: string;
    loanId: string;
    loanStatus: "Pending" | "Update required" | "Approved" | "Rejected";
    message: string;
    response: string;
    status: "Resolved" | "Denied" | "In progress";

};

export type ManagerInfoTypes = {
    firstName: string,
    lastName: string,
    _id: string,
    id: string,
    email: string
}

export type ApplicationFormData = z.infer<typeof formSchema>;

type UpdateApplicationFormTypes = z.infer<typeof updateformSchema>;
export interface UpdateApplicationFormData extends UpdateApplicationFormTypes {
    managerId: ManagerInfoTypes,
    createdAt: Date
}

export type AddManagerTypes = z.infer<typeof addManagerFormSchema>;

export type SignUpFormTypes = z.infer<typeof applicantSignupFormSchema>;