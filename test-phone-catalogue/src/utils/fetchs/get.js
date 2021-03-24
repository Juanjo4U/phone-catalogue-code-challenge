import base from "./base";

const defaultArgs = { url: '', params: {}, then: undefined }

const get = ({ url, params = {}, then } = defaultArgs) => {
    const urlParams = Object.entries(params)
        .reduce((acc, [name, value]) => `${acc}${name}=${value}&`, '?')
        .slice(0, -1);
    return base(url + urlParams, {}, then);
}

export default get;