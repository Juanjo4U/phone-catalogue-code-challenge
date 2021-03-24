import { constants } from "../../../utils/constants";
import { Description, Title, Text } from "../../common/text";

export const PhoneInfo = ({ phone }) =>
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