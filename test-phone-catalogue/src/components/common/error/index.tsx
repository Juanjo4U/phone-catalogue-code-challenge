import { FunctionComponent } from "react";
import { Button } from "../button";
import { Title } from "../text";

interface Props {
    message: string;
    onClick?(): any
}

export const ErrorComponent: FunctionComponent<Props> = ({ message, onClick }) =>
    <>
        <Title text={message} />
        <Button text='try_again' onClick={onClick} />
    </>