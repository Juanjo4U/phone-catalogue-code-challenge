import { requestPhoneList } from "../states/phone/actionsUpdate"

export const onAppRuns = (dispatch) => {
    dispatch(requestPhoneList());
}