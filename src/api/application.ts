import { useMutation, useQuery } from 'react-query';
import { ApplicationFormData, UpdateApplicationFormData } from "@/types";
import { toast } from 'sonner';
import { getAccessToken } from '@/utils/helperFunctions';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * UseSubmitApplication hook for submitting an application.
 * @returns An object containing submitApplication function, isLoading, isSuccess, and error.
 */
export const useSubmitApplication = () => {
    const accessToken = getAccessToken();

    const submitApplicationRequest = async (application: ApplicationFormData) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(application),
        });

        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: submitApplication, isLoading, isSuccess, error } = useMutation(submitApplicationRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        submitApplication,
        isLoading,
        isSuccess
    }
};

/**
 * UseGetUserApplications hook for fetching user's applications.
 * @returns An object containing userApplications and isLoading.
 */
export const useGetUserApplications = () => {
    const accessToken = getAccessToken();
    
    const getAllUserApplicationsRequest = async (): Promise<ApplicationFormData[]> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/findByUser`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        const responseData = await response.json();

        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }
        
        if (!response.ok) {
            throw new Error(responseData.message);
        }

        return responseData.applications;
    };

    const { data: userApplications, isLoading } = useQuery("loans", () => getAllUserApplicationsRequest());

    return { userApplications, isLoading }
};

/**
 * UseGetLoanApplicationData hook for fetching a specific loan application data.
 * @param loanId The ID of the loan application to fetch.
 * @returns An object containing currentApplication and isLoading.
 */
export const useGetLoanApplicationData = (loanId: string) => {
    const accessToken = getAccessToken();
    
    const getApplicationRequest = async (loanId:string): Promise<UpdateApplicationFormData> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/findById?id=${loanId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        const responseData = await response.json();

        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }
        
        if (!response.ok) {
            throw new Error(responseData.message);
        }

        return responseData.application;
    };

    const { data: currentApplication, isLoading } = useQuery("applicationInfo", () => getApplicationRequest(loanId));

    return { currentApplication, isLoading }
};

/**
 * UseGetManagerAssignedLoans hook for fetching loans assigned to a manager.
 * @param managerId The ID of the manager whose loans to fetch.
 * @returns An object containing managerApplications and isLoading.
 */
export const useGetManagerAssignedLoans = () => {
    const accessToken = getAccessToken();
    const managerId = JSON.parse(localStorage.getItem("manager") as string)._id;

    const getManagerApplicationsRequest = async (managerId: string): Promise<UpdateApplicationFormData[]> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/findByManager?managerId=${managerId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        const responseData = await response.json();

        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }
        
        if (!response.ok) {
            throw new Error(responseData.message);
        } 

        return responseData.applications;
    };

    const { data: managerApplications, isLoading } = useQuery("applications", () => getManagerApplicationsRequest(managerId));

    return { managerApplications, isLoading }
};

/**
 * UseGetAllLoans hook for fetching all loans.
 * @returns An object containing loans and isLoading.
 */
export const useGetAllLoans = () => {
    const accessToken = getAccessToken();
    
    const getAllLoansRequest = async (): Promise<UpdateApplicationFormData[]> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/list`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        const responseData = await response.json();
        
        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }

        if (!response.ok) {
            throw new Error(responseData.message);
        } 

        return responseData.applications;
    };

    const { data: loans, isLoading } = useQuery("applications", () => getAllLoansRequest());

    return { loans, isLoading }
};

/**
 * UseUpdateApplication hook for updating an application.
 * @param loanId The ID of the loan application to update.
 * @returns An object containing updateApplication and isLoading.
 */
export const useUpdateApplication = (loanId: string) => {
    const updateApplicationRequest = async (application: UpdateApplicationFormData) => {
        const accessToken = getAccessToken();
        const response = await fetch(`${API_BASE_URL}/api/v1/application/update?id=${loanId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(application),
        });

        const responseData = await response.json();

        if (response.status === 401) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    }

    const { mutateAsync: updateApplication, isLoading, isSuccess, error, reset } = useMutation(updateApplicationRequest);

    if (isSuccess) {
        toast.success("Application updated!");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return {
        updateApplication,
        isLoading
    }
};

/**
 * UseDeleteApplication hook for deleting an application.
 * @returns An object containing isLoading.
 */
export const useDeleteApplication = () => {
    const updateApplicationApplicationRequest = async (applicationId: string) => {
        const accessToken = getAccessToken();
        const response = await fetch(`${API_BASE_URL}/api/v1/application/delete?id=${applicationId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            }
        });

        const responseData = await response.json();

        if (response.status === 401) {
            window.location.replace('/sign-in');
        }

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    }

    const { isLoading, isSuccess, error, reset } = useMutation(updateApplicationApplicationRequest);

    if (isSuccess) {
        toast.success("Application deleted!");
        window.location.reload();
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return {
        isLoading
    }
};