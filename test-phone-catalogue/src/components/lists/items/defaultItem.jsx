import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import routes from '../../../navigation/routes';

const DefaultItem = ({ id, name, manufacturer, isLast }) => {
    const path = generatePath(routes.phone.path, { id });
    return (
        <Link to={path} className='listItem'>
            {name} - {manufacturer}
        </Link>
    )
}

export default DefaultItem