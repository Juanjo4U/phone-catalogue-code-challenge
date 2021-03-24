import { useDispatch, useSelector } from "react-redux";
import { requestPhoneList } from "../../../redux/states/phone/actionsUpdate";
import { getPhoneList, getIsRequestingList, getRequestPhoneListError } from "../../../redux/states/phone/selecters";
import { ErrorComponent } from "../../common/error";
import { Spinner } from "../../common/spinner";
import { ListGenerator } from "../../lists/generator";

export const PhoneList = () => {
    const phones = useSelector(getPhoneList);
    const isLoading = useSelector(getIsRequestingList);
    const isThereAnErrorRequesting = useSelector(getRequestPhoneListError);
    const dispatch = useDispatch();
    const requestData = () => dispatch(requestPhoneList());
    return isLoading ? <Spinner /> :
        <>
            {!isThereAnErrorRequesting ?
                <ListGenerator elements={phones} />
                :
                <ErrorComponent message='error_requesting_all_list' onClick={requestData} />
            }
        </>
}