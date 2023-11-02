import { Box, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box
            minHeight='8vh'
            backgroundColor='#3454D1'
            display="flex"
            alignItems="center"
            paddingLeft='15px'
            paddingRight='15px'
            color={"white"}
            justifyContent="space-between"

        >
            <Text as="b" letterSpacing="1px" color="#FFFFFF" fontSize="1xl">
                Dio Banking
            </Text>
        </Box>
    );
}

export default Header;