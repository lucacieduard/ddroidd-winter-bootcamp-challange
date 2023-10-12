export type data = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address_1: string;
    address_2: string;
    country: string;
    state: string;
    city: string;
}

export type errors ={
    name: string;
    msg: string;
}

export type UserCtx = {
    user: data | undefined,
    createUser : (user : data) => void
}