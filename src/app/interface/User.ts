export interface User {
    uuid: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    age: number;
    birth_day: string;
    contact: string;
    gender: Record<string, 'male' | 'female'>,
    created_at: string;
    updated_at: string
}