import { Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { login } from "../services/login";
import { AppButton } from "./AppButton";

interface UserData {
    email: string;
    password: string;
    name: string;
}

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userData, setUserdata] = useState<null | UserData>();

    useEffect(() => {
        api.then((result: any | UserData) => {
            setUserdata(result);
        });
    });

    return (
        <>
            {
                userData !== null && userData !== undefined && <Text>Olá, {userData.name}</Text>
            }
            <Text as="b" fontSize="2xl" marginBottom="8px">Faça o Login</Text>
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