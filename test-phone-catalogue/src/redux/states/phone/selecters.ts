import { AnyFunction } from "../../../utils/types_&_interfaces";
import { pipeFromObj as pipe, getFromObj as get } from "../../../utils/utilities";
// EMULATING MY OWN LODASH XD!!

const phone = get('phone');

const fromPhoneGet = (key: string): AnyFunction => pipe(
    phone,
    get(key)
)

export const getPhoneList = fromPhoneGet('phoneList');

export const getIsRequestingList = fromPhoneGet('isRequestingList');

export const getRequestPhoneListError = fromPhoneGet('errorRequestingList');