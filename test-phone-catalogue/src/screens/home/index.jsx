import { Title } from "../../components/common/text";
import { PhoneList } from "../../components/screens/home/list";

const Home = () =>
    <div className='fullPage flexColumnCenter'>
        <div className='midContainer infoCard' >
            <Title text='all_phones' />
            <PhoneList />
        </div>
    </div>

export default Home