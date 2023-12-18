"use client";

import { FunctionComponent } from "react";
import Crud from "../crud";
import CarList from "./list";
import { Product } from "@/types";
import CreateCar from "./create";

interface CarsProps {
    cars: Product[]
}

const Cars: FunctionComponent<CarsProps> = ({ cars }) => {
    return (
        <Crud<Product>
            list={cars}
            renderList={({ items, handleDelete, setEditableItem }) => <CarList products={items} removeItemFromList={handleDelete} setEditableItem={setEditableItem} />}
            itemForm={addItm => <CreateCar addItm={addItm} />}
            edtFrm={(editable, updateItem) => <CreateCar editable={{ car: editable, updateList: updateItem }} />}
        />
    );
}

export default Cars;