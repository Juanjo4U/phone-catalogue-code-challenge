import { constants } from "../constants";

const defaultThenAction = (res: any): any => res.json();

export interface FetchBase {
    url: string;
    params?: object;
    options?: object;
    then?(...args: any): any
}

const base = ({ url = '', options = {}, then: thenAction = defaultThenAction }: FetchBase): any => {
    return fetch(constants.API.baseUrl + url, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options,
    }).then(thenAction);
}

export default base;