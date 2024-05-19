import { createContext, useState } from "react";


type Props = {
    children: React.ReactNode;
}

type User = {
    profile: {
        name: string;
        email: string;
        phone: string;
        firstName: string;
        lastName: string;
        role: string;
    };
    applications: {
        firstName: string;
    };
}

type ContextData = { 
    user: User;  
    setUser: React.Dispatch<React.SetStateAction<User>>; 
}

export const Store = createContext({});

const StoreContext = ({ children }: Props) => {
    const [user, setUser] = useState<User>({
        profile: {
            name: "",
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            role: "",
        },
        applications: {
            firstName: ""
        },
    });


    const contextData : ContextData = {
        user,
        setUser
    }

    return (
        <Store.Provider value={contextData}>
            {children}
        </Store.Provider>
    )
}

export default StoreContext;