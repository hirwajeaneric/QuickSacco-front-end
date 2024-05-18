import { useMutation, useQuery } from 'react-query';
import { CreateUserTypes, SignInTypes, UpdateUserTypes, User } from "@/types";
import { toast } from 'sonner';
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSignUp = () => {
    const SignUpRequest = async (user: CreateUserTypes) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create account");
        }
    };

    const { mutateAsync: signUp, isLoading, isError, isSuccess,  } = useMutation(SignUpRequest);

    return {
        signUp,
        isLoading,
        isError,
        isSuccess
    }
};

export const useSignIn = () => {
    const SignInRequest = async (user: SignInTypes) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to sign in");
        }
    };

    const { mutateAsync: signIn, isLoading, isError, isSuccess } = useMutation(SignInRequest);

    return {
        signIn,
        isLoading,
        isError,
        isSuccess
    }
};

export const useGetProfileData = () => {
    const accessToken = Cookies.get('access-token');
    const getUserProfileRequest = async (): Promise<User> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/user`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch profile info");
        }

        return response.json();
    };

    const { data: currentUser, isLoading, error } = useQuery("userInfo", () => getUserProfileRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { currentUser, isLoading }
};

export const useUpdateUserAccount = () => {
    const updateUserAccountRequest = async (user: UpdateUserTypes) => {
        const accessToken = Cookies.get('access-token');
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/update`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    }

    const { mutateAsync: updateAccount, isLoading, isSuccess, error, reset } = useMutation(updateUserAccountRequest);

    if (isSuccess) {
        toast.success("User profile updated!");
    }
    
    if (error) {
        toast.error(error.toString());
        reset();
    }

    return {
        updateAccount,
        isLoading
    }
};