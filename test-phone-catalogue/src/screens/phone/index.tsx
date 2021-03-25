import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { constants } from "../../utils/constants";
import { fetchGet } from "../../utils/fetchs";
import { Spinner } from "../../components/common/spinner";
import { PhoneInfo } from "../../components/screens/phone/info";
import { ErrorComponent } from "../../components/common/error";

interface Phonebase {
    id?: any
}

const PhoneDetails = () => {
    const [isLoading, setLoader] = useState(false);
    const [isError, setError] = useState();
    const [phone, setPhone] = useState({});
    const { id } = useParams<Phonebase>();
    const requestData = () => {
        setError(undefined);
        setLoader(true);
        fetchGet({ url: constants.API.phones + id })
            .then(setPhone)
            .catch(setError)
            .finally(() => setLoader(false));
    }
    useEffect(requestData, [id]);
    return (
        <div className='fullPage'>
            <div className='midContainer infoCard' >
                {isLoading ?
                    <Spinner />
                    :
                    <>
                        {isError ?
                            <ErrorComponent message='error_requesting_item' onClick={requestData} />
                            :
                            <PhoneInfo phone={phone} />
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default PhoneDetails