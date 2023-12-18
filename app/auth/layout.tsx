import Copyright from "@/app-layouts/footer/copyright";
import PatternWrapper from "@/app-layouts/wrappers/pattern";
import AuthMasonry from "@/components/auth/AuthLayoutImages";
import AuthHeader from "@/components/auth/auth-header";
import AuthWrapper from "@/components/auth/wrapper";
import { Box, Container, Stack } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface AuthProps {
    children: ReactNode
}

const Auth: FunctionComponent<AuthProps> = ({ children }) => {
    return (
        <PatternWrapper>
            <Stack direction={"row"} sx={{
                alignItems: "flex-start"
                // justifyContent: "flex-start"
            }}>
                <Box
                    sx={{
                        flex: 3
                    }}
                >
                    <Container maxWidth={"sm"} sx={{
                        position: "relative",
                        // top: "50%",
                        // transform: "translateY(-50%)",
                        px: {
                            xs: "0 !important",
                            md: 4
                        },
                        py: 5,
                        // my: 5,
                    }}>
                        <AuthHeader />
                        <AuthWrapper>
                            {
                                children
                            }
                        </AuthWrapper>
                        <Copyright sx={{ mt: 3 }} />
                    </Container>
                </Box>
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        },
                        flex: 2,
                        height: "100vh",
                        overflow: "hidden",
                        position: "sticky",
                        top: 0,
                        m: 0,
                        p: 0
                    }}
                >
                    <AuthMasonry />
                </Box>
            </Stack >
        </PatternWrapper>
    );
}

export default Auth;