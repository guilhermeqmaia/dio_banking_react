import { Box, Center, Flex, Text } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

export const Login = () => {
    return (
        <Flex>
            <Box
                width="50%"
                height='100vh'
                backgroundColor="#3454D1"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center>
                    <Text as="b" letterSpacing="2px" color="#FFFFFF" fontSize="6xl">Dio Banking</Text>
                </Center>
            </Box>
            <Box
                width="50%"
                height='100vh'
                backgroundColor="#FFFFFF"
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
                <LoginForm />
            </Box>
        </Flex>
    );
}