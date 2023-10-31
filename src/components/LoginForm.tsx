import { Input, Text } from "@chakra-ui/react";
import { login } from "../services/login";
import { AppButton } from "./AppButton";

const LoginForm = () => {
    return (
        <>
            <Text as="b" fontSize="2xl" marginBottom="16px">Faça o Login</Text>
            <Input marginBottom={"16px"} placeholder="Email" width="30vw" />
            <Input marginBottom={"16px"} placeholder="Password" width="30vw" />
            <AppButton
                onTap={async () => login()}
                text="Login"
            />

        </>
    );
}

export default LoginForm;