import { T } from "../../../translations";

const degaultAction = () => { };

export const Button = ({ text, onClick = degaultAction }) =>
    <button data-testid='button' className='button' onClick={onClick} >{T(text)}</button>