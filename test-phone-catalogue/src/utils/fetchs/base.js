import { constants } from "../constants";

const defaultThenAction = res => res.json();

const base = (url = '', options = {}, thenAction = defaultThenAction) => {
    return fetch(constants.API.baseUrl + url, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options,
    }).then(thenAction);
}

export default base;