/* import { requestAllPhones } from "../states/phone/actionsDispatch"

export const onAppRuns = (dispatch) => {
    dispatch(requestAllPhones());
} */

import { requestAllPhones } from "../toolkitStates/phone/actionsDispatch"

export const onAppRuns = (dispatch) => {
    dispatch(requestAllPhones());
}