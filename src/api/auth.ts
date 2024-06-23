import { useMutation, useQuery } from 'react-query';
import { AddManagerTypes, OPTTypes, SignInTypes, SignUpFormTypes, UpdateUserTypes, User } from "@/types";
import { toast } from 'sonner';
import Cookies from "js-cookie";
import { getAccessToken } from '@/utils/helperFunctions';

/**
 * Constants
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const environment = import.meta.env.VITE_ENVIRONMENT;

/**
 * Function to handle user sign up
 * @returns {Object} - An object containing the signUp function, isLoading, isError, isSuccess, and error properties.
 */
export const useSignUp = () => {
    const SignUpRequest = async (user: AddManagerTypes | SignUpFormTypes) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: signUp, isLoading, isError, isSuccess, error } = useMutation(SignUpRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        signUp,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to handle user sign in
 * @returns {Object} - An object containing the signIn function, isLoading, isError, isSuccess, and error properties.
 */
export const useSignIn = () => {
    const SignInRequest = async (user: SignInTypes) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }

        if (responseData.user.role.toLowerCase() === 'admin') {
            Cookies.set('admin-access-token', responseData.token, {
                secure: environment === "production" ? true : false,
                expires: 1 / 24
            });
        } else if (responseData.user.role.toLowerCase() === 'manager') {
            Cookies.set('manager-access-token', responseData.token, {
                secure: environment === "production" ? true : false,
                expires: 1 / 24
            });
        } else {
            Cookies.set('teacher-access-token', responseData.token, {
                secure: environment === "production" ? true : false,
                expires: 1 / 24
            });
        }

        localStorage.setItem((responseData.user.role).toLowerCase(), JSON.stringify(responseData.user));
    };

    const { mutateAsync: signIn, isLoading, isError, isSuccess, error } = useMutation(SignInRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        signIn,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to handle user password reset
 * @returns {Object} - An object containing the forgotPassword function, isLoading, isError, isSuccess, and error properties.
 */
export const useForgotPassword = () => {
    const ForgotPasswordRequest = async (user: { email: string }) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: forgotPassword, isLoading, isError, isSuccess, error } = useMutation(ForgotPasswordRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        forgotPassword,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to handle user password reset
 * @returns {Object} - An object containing the resetPassword function, isLoading, isError, isSuccess, and error properties.
 */
export const useResetPassword = () => {
    const token = window.location.search.split('=')[1];

    const ResetPasswordRequest = async (user: { password: string }) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/resetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: resetPassword, isLoading, isError, isSuccess, error } = useMutation(ResetPasswordRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        resetPassword,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to handle user OTP validation
 * @returns {Object} - An object containing the validateOTP function, isLoading, isError, isSuccess, and error properties.
 */
export const useValidateOTP = () => {
    const SignInRequest = async (data: OPTTypes) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: validateOTP, isLoading, isError, isSuccess, error } = useMutation(SignInRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        validateOTP,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to handle user OTP regeneration
 * @returns {Object} - An object containing the validateOTP function, isLoading, isError, isSuccess, and error properties.
 */
export const useRegenerateOTP = () => {
    const SignInRequest = async (data: { id: string }) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/regenerateOtp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
    };

    const { mutateAsync: validateOTP, isLoading, isError, isSuccess, error } = useMutation(SignInRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        validateOTP,
        isLoading,
        isError,
        isSuccess
    }
};

/**
 * Function to get user profile data
 * @returns {Object} - An object containing the currentUser property and isLoading property.
 */
export const useGetProfileData = () => {
    const accessToken = getAccessToken();

    const getUserProfileRequest = async (): Promise<User> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/user`, {
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

        return responseData;
    };

    const { data: currentUser, isLoading } = useQuery("userInfo", () => getUserProfileRequest);

    return { currentUser, isLoading }
};

/**
 * Function to get managers data
 * @returns {Object} - An object containing the managers property and isLoading property.
 */
export const useGetManagers = () => {
    const accessToken = getAccessToken();

    const getManagersRequest = async (): Promise<User[]> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/managers`, {
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

        return responseData.managers;
    };

    const { data: managers, isLoading } = useQuery("managers", () => getManagersRequest);

    return { managers, isLoading }
};

/**
 * Function to get teachers data
 * @returns {Object} - An object containing the teachers property and isLoading property.
 */
export const useGetTeachers = () => {
    const accessToken = getAccessToken();

    const getManagersRequest = async (): Promise<User[]> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/teachers`, {
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

        return responseData.teachers;
    };

    const { data: teachers, isLoading } = useQuery("teachers", () => getManagersRequest);

    return { teachers, isLoading }
};

/**
 * Function to update user account data
 * @returns {Object} - An object containing the updateAccount function, isLoading property, and error property.
 */
export const useUpdateUserAccount = () => {
    const updateUserAccountRequest = async (user: UpdateUserTypes) => {
        const accessToken = getAccessToken();
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/update`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const responseData = await response.json();

        if (!response.ok) {
            if (window.location.pathname.includes('/admin')) {
                window.location.replace('/admin/auth');
            } else if (window.location.pathname.includes('/manager')) {
                window.location.replace('/manager/auth');
            } else {
                window.location.replace('/signin');
            }
        }

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
    };

    const { mutateAsync: updateAccount, isLoading, error } = useMutation(updateUserAccountRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        updateAccount,
        isLoading
    }
};