import { FunctionComponent } from "react";
import { constants } from "../../../utils/constants";
import { PhoneInterface } from "../../../utils/types_&_interfaces";
import { Description, Title, Text } from "../../common/text";

interface Props {
    phone: PhoneInterface
}

export const PhoneInfo: FunctionComponent<Props> = ({ phone }) =>
    <>
        <Title>{phone.name} - {phone.manufacturer}</Title>
        {phone.imageFileName &&
            <img src={constants.API.getImageUri(phone.imageFileName)} className='phoneImage'
                alt={JSON.stringify(phone)} />
        }
        <Text>{phone.description}</Text>
        <div className='infoContainer' >
            <Description title='price' description={phone.price + '$'} />
            <Description title='color' description={phone.color} />
            <Description title='screen' description={phone.screen} />
            <Description title='processor' description={phone.processor} />
            <Description title='ram' description={phone.ram} />
        </div>
    </>