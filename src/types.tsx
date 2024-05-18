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
}

export type UpdateUserTypes = {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
}

export type SignInTypes = {
    email: string;
    password: string;
}