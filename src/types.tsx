import { z } from "zod";
import { addManagerFormSchema, formSchema, updateformSchema } from "./utils/validationSchemas";

export type User = {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
};

export type CreateUserTypes = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    role: string;
}

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

export type ApplicationFormData = z.infer<typeof formSchema>;

export type UpdateApplicationFormData = z.infer<typeof updateformSchema>;

export type AddManagerTypes = z.infer<typeof addManagerFormSchema>;