"use client"

import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ReduxWrapperProps {
    children: ReactNode | ReactNode[]
}

const ReduxWrapper: FunctionComponent<ReduxWrapperProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {
                children
            }
        </Provider>
    );
}

export default ReduxWrapper;