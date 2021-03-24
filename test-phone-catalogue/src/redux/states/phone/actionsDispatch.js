import { constants } from "../../../utils/constants";
import { fetchGet } from "../../../utils/fetchs";
import { setAllPhoneList, setPhoneListLoader, setRequestPhoneListError } from "./actionsUpdate";

export const requestAllPhones = () => dispatch => {
    dispatch(setPhoneListLoader(true));
    fetchGet({ url: constants.API.phones })
        .then(phones => {
            dispatch(setAllPhoneList(phones));
        })
        .catch(err => {
            dispatch(setRequestPhoneListError(err));
        })
        .finally(() => {
            dispatch(setPhoneListLoader(false));
        });
}