export interface Address {
    street: string;
    city: string;
    state: string;
}

export interface Friend {
    id: string;
    name: string;
    email: string;
    phone: string;
    Address: Address[];
}