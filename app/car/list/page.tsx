import InitialFetch from "@/app-layouts/wrappers/InitialFetch";
import CarListIndex from "@/components/car/carlist";
import ListCardLoading from "@/components/list/card-loading";
import { Car } from "@/types";
import { FunctionComponent } from "react";

interface CarListProps {

}

const CarList: FunctionComponent<CarListProps> = async () => {
    return (
        <>
            <h1>Available Cars List</h1>
            <InitialFetch<Car> initialUrl="https://myfakeapi.com/api/cars"
                ky="cars"
                loading={<ListCardLoading />}
            >
                {
                    cars => <CarListIndex cars={cars} />
                }
            </InitialFetch>
        </>
    );
}

export default CarList;