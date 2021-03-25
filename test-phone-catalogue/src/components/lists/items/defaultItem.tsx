import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import routes from '../../../navigation/routes';
import { PhoneInterface } from "../../../utils/types_&_interfaces";

const DefaultItem: FunctionComponent<PhoneInterface> = ({ id, name, manufacturer }) => {
    const path = generatePath(routes.phone.path, { id });
    return (
        <Link to={path} className='listItem'>
            {name} - {manufacturer}
        </Link>
    )
}

export default DefaultItem