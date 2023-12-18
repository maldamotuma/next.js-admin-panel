"use client"

import { usePathname } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";
import MainLayout from "../main-layout";

interface WholeWrapperProps {
    children: ReactNode | ReactNode[]
}

const WholeWrapper: FunctionComponent<WholeWrapperProps> = ({ children }) => {
    const path = usePathname();

    return (
        <>
            {
                path.startsWith("/auth") ?
                    children
                    :
                    <MainLayout>
                        {
                            children
                        }
                    </MainLayout>
            }
        </>
    );
}

export default WholeWrapper;