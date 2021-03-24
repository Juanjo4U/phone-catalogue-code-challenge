import { requestAllPhones } from "../states/phone/actionsDispatch"

export const onAppRuns = (dispatch) => {
    dispatch(requestAllPhones());
}