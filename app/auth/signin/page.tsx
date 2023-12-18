import SigninForm from "@/components/auth/signin-form";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SignInProps {

}

const SignIn: FunctionComponent<SignInProps> = () => {
    return (
        <>
            <SigninForm />
        </>
    );
}

export default SignIn;