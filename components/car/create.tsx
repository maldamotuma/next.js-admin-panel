import StepperSimpler from "@/hooks/stepper";
import { FunctionComponent } from "react";
import CarForm from "./car-form";
import CarFeatures from "./car-features";
import { Product } from "@/types";
import CarTab from "./edit-car";

interface CreateCarProps {
    addItm?: (itm: Product) => void;
    editable?: {
        car: Product | null;
        updateList(cr: Product): void;
    }
}

const renderIndex = (i: number, b: () => void, n: () => void, editable?: CreateCarProps["editable"]) => {
    const steps = [<CarForm
        nextStep={n}
        editable={editable}
        key={"car-form"}
    />,
    <CarFeatures
        prevStep={b}
        editable={editable}
        key={"car-feature"}
    />];
    return steps[i];
}

const steps = ['Car', 'Features'];

const CreateCar: FunctionComponent<CreateCarProps> = ({ addItm, editable }) => {
    if (editable?.car) {
        return (
            <CarTab
                carForm={<CarForm editable={editable} />}
                featureForm={<CarFeatures editable={editable} />}
            />
        )
    }

    return (
        <StepperSimpler steps={steps}>
            {
                (i, b, n) => renderIndex(i, b, n, editable)
            }
        </StepperSimpler>
    );
}

export default CreateCar;