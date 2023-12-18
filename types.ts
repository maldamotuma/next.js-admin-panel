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