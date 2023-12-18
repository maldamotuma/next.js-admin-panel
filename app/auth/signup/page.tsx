import SignUpForm from "@/components/auth/signupForm";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SignupProps {

}

const Signup: FunctionComponent<SignupProps> = () => {
    return (
        <>
            <SignUpForm />
        </>
    );
}

export default Signup;