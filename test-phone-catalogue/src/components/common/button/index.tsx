import { FunctionComponent } from "react";
import { T } from "../../../translations";

interface Props {
    text: string;
    onClick?(): any
}

const degaultAction = () => { };

export const Button: FunctionComponent<Props> = ({ text, onClick = degaultAction }) =>
    <button data-testid='button' className='button' onClick={onClick} >{T(text)}</button>