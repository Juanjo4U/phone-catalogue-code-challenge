import { Button } from "../button";
import { Title } from "../text";

export const ErrorComponent = ({ message, onClick }) =>
    <>
        <Title text={message} />
        <Button text='try_again' onClick={onClick} />
    </>