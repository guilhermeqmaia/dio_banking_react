import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";
import { AppButton } from "./AppButton";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Text as="b" fontSize="2xl" marginBottom="16px">Faça o Login</Text>
            <Input
                marginBottom={"16px"}
                placeholder="Email"
                width="30vw"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                marginBottom={"16px"}
                placeholder="Password"
                width="30vw"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <AppButton
                onTap={async () => login(email, password)}
                text="Login"
            />
        </>
    );
}

export default LoginForm;