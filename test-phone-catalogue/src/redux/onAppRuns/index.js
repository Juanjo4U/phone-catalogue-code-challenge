import { requestPhoneList } from "../sagas/phone/watchedActions";

export const onAppRuns = (dispatch) => {
    dispatch(requestPhoneList());
}