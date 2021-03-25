import base, { FetchBase } from "./base";

const get = ({ url, params = {}, then }: FetchBase) => {
    const urlParams = Object.entries(params)
        .reduce((acc, [name, value]) => `${acc}${name}=${value}&`, '?')
        .slice(0, -1);
    return base({ url: url + urlParams, options: {}, then });
}

export default get;