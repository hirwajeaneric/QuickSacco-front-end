import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string({ required_error: "FirstName is required" })
        .trim()
        .min(1, 'First name is required')
        .max(255, 'First name is too long'),
    lastName: z.string()
        .trim()
        .min(1, 'Last name is required')
        .max(255, 'Last name is too long'),
    nationalId: z.string()
        .trim()
        .min(16, 'National ID must be 16 characters long')
        .max(16, 'National ID must be 16 characters long'),
    email: z.string({ required_error: "Email address is required" })
        .email('Invalid email format')
        .trim(),
    teacherId: z.string()
        .trim(),
    phone: z.string()
        .trim()
        .min(10, 'Phone number must be 10 digits long'),
    dateOfBirth: z.date({ required_error: "Date of birth is required" }),
    gender: z.enum(['Male', 'Female', 'Other']), // Use enum for valid gender options
    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']), // Use enum for valid marital status options
    numberOfDependencies: z.number({
        coerce: true,
        required_error: "Number of dependencies is required"
    }),
    workSchool: z.string({
        required_error: "Work school is required"
    })
        .trim(),
    position: z.string({
        required_error: "Position is required"
    })
        .trim(),
    monthlySalary: z.number({
        coerce: true,
        required_error: "Monthly salary is required"
    })
        .positive('Monthly salary must be a positive number'),
    amountRequested: z.number({
        coerce: true,
        required_error: "The requested amount is required"
    }),
    suggestedRepaymentPerMonth: z.number(),
    repaymentPerMonth: z.number(),
    repaymentPeriod: z.number(),
    suggestedRepaymentPeriod: z.number({
        coerce: true,
        required_error: "You must provide the time you estimate to pay back is required"
    })
        .positive('Repayment period must be a positive number'),
    bankAccountNumber: z.string({
        required_error: "Bank account number is required"
    })
        .trim(),
    proofOfEmployment: z.string({
        required_error: "Proof of employment is required"
    })
        .trim(),
    copyOfNationalId: z.string({
        required_error: "Copy of national ID is required"
    })
        .trim(),
    comment: z.string()
        .trim(),
});


export const updateformSchema = z.object({
    firstName: z.string({ required_error: "FirstName is required" })
        .trim()
        .min(1, 'First name is required')
        .max(255, 'First name is too long'),
    lastName: z.string()
        .trim()
        .min(1, 'Last name is required')
        .max(255, 'Last name is too long'),
    nationalId: z.string()
        .trim()
        .min(16, 'National ID must be 16 characters long')
        .max(16, 'National ID must be 16 characters long'),
    email: z.string({ required_error: "Email address is required" })
        .email('Invalid email format')
        .trim(),
    teacherId: z.string()
        .trim(),
    phone: z.string()
        .trim()
        .min(10, 'Phone number must be 10 digits long'),
    dateOfBirth: z.date({ required_error: "Date of birth is required" }),
    gender: z.enum(['Male', 'Female', 'Other']), // Use enum for valid gender options
    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']), // Use enum for valid marital status options
    numberOfDependencies: z.number({
        coerce: true,
        required_error: "Number of dependencies is required"
    }),
    workSchool: z.string({
        required_error: "Work school is required"
    })
        .trim(),
    position: z.string({
        required_error: "Position is required"
    })
        .trim(),
    monthlySalary: z.number({
        coerce: true,
        required_error: "Monthly salary is required"
    })
        .positive('Monthly salary must be a positive number'),
    amountRequested: z.number({
        coerce: true,
        required_error: "The requested amount is required"
    }),
    repaymentPerMonth: z.number(),
    repaymentPeriod: z.number(),
    suggestedRepaymentPeriod: z.number({
        coerce: true,
        required_error: "You must provide the time you estimate to pay back is required"
    })
        .positive('Repayment period must be a positive number'),
    bankAccountNumber: z.string({
        required_error: "Bank account number is required"
    })
        .trim(),
    proofOfEmployment: z.string({
        required_error: "Proof of employment is required"
    })
        .trim(),
    copyOfNationalId: z.string({
        required_error: "Copy of national ID is required"
    })
        .trim(),
    comment: z.string()
        .trim(),
    loanStatus: z.enum(["Pending", "Update required", "Approved", "Rejected"]),
    _id: z.string()
});

export const addManagerFormSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    phone: z.string().min(10).max(10),
    email: z.string().email('Invalid email'),
    role: z.string()
});

