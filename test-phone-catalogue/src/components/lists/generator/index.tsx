import { FunctionComponent } from "react";
import DefaultItem from '../items/defaultItem';

interface Props {
    elements: Array<object>;
    component?: FunctionComponent<any>
}

export const ListGenerator: FunctionComponent<Props> = ({ elements = [], component: Item = DefaultItem }) => {
    const length = elements.length;
    if (!length) return null;
    return (
        <div className='listContainer'>
            {elements.map((element, index) => <Item key={index} {...element} />)}
        </div>
    )
}