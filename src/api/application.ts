import { useMutation, useQuery } from 'react-query';
import { UpdateApplicationTypes, Application } from "@/types";
import { toast } from 'sonner';
import Cookies from "js-cookie";
import { ApplicationFormData } from '@/components/forms/AddApplicationForm';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSubmitApplication = () => {
    const submitApplicationRequest = async (application: ApplicationFormData) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application),
        });

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

export const useGetApplicationsData = () => {
    const accessToken = Cookies.get('access-token');
    
    const getApplicationRequest = async (): Promise<Application> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/application/findByUser`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        const responseData = await response.json();
        
        if (!response.ok) {
            throw new Error(responseData.message);
        }

        return responseData;
    };

    const { data: currentApplication, isLoading } = useQuery("applicationInfo", () => getApplicationRequest());

    return { currentApplication, isLoading }
};

export const useUpdateApplication = () => {
    const updateApplicationRequest = async (application: UpdateApplicationTypes) => {
        const accessToken = Cookies.get('access-token');
        const response = await fetch(`${API_BASE_URL}/api/v1/application/update`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(application),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    }

    const { mutateAsync: updateApplication, isLoading, isSuccess, error, reset } = useMutation(updateApplicationRequest);

    if (isSuccess) {
        toast.success("Application profile updated!");
        window.location.reload();
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

export const useDeleteApplication = () => {
    const updateApplicationApplicationRequest = async (applicationId: string) => {
        const accessToken = Cookies.get('access-token');
        const response = await fetch(`${API_BASE_URL}/api/v1/application/delete?id=${applicationId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

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