export interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

export type Car = {
    id: number;
    car: string;
    car_model: string;
    car_color: string;
    car_model_year: number;
    car_vin: string;
    price: string;
    availability: boolean;
    image: string;
}

export type userType = {
    id: number;
    first_name: string;
    last_name: string;
    profile_picture: string;
    created_at: string;
    username: string;
    email: string;
    phone: string;
    gender: string;
    email_verified_at: string | null;
    is_active: boolean;
    can_blog: 1 | 0;
}

export type statusTypes = "pending" | "idle" | "rejected";