import { Button } from "@chakra-ui/react";

export interface AppButtonProps {
    onTap: () => {};
    text: string;
}

export const AppButton = (props: AppButtonProps) => {
    return (
        <Button
            color="#FFFFFF"
            backgroundColor="#3454D1"
            width="30vw"
            onClick={props.onTap}>
            {props.text}
        </Button>
    );
}

