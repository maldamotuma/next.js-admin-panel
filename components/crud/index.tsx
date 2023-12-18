"use client";

import { ReactNode, useState } from "react";
import CreateItem from "./create";


interface CrudProps<T> {
    list: T[];
    renderList({
        items,
        handleDelete,
        setEditableItem
    }: {
        items: T[],
        handleDelete: (id: number) => void,
        setEditableItem: (itm: T) => void
    }): ReactNode[] | ReactNode;
    itemForm?: (addItm: (di: T) => void) => ReactNode | ReactNode[];
    edtFrm?: (editablet: T | null, updateItem: (itm: T) => void) => ReactNode;
}

const Crud = <T extends { id: number }>({ list, renderList, itemForm, edtFrm }: CrudProps<T & { id: number }>): ReactNode => {
    const [items, setItems] = useState<T[]>(list);
    const [editable, setEditable] = useState<T | null>(null);

    const handleDelete = (id: number) => {
        setItems(prdcts => prdcts.filter(pr => pr.id !== id));
    }

    const addItem = (itm: T) => {
        setItems(prev => ([itm, ...prev]));
    }

    const updateItem = (itm: T) => {
        setItems(prev => prev.map(citm => citm.id === itm.id ? itm : citm));
    }

    const setEditableItem = (itm: T) => {
        setEditable(itm);
    }

    const closeEditable = () => {
        setEditable(null);
    }

    return (
        <>
            {
                itemForm &&
                <CreateItem
                    itemForm={itemForm(addItem)}
                    editableItem={editable}
                    edtFrm={edtFrm}
                    closeEditable={closeEditable}
                    updateItem={updateItem}
                />
            }
            {
                renderList({ items, handleDelete, setEditableItem })
            }
        </>
    );
}

export default Crud;