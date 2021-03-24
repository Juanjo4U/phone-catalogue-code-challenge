export const functionWithCache = (myFunction) => {
    if (typeof myFunction !== 'function') throw new Error(`PARAM IS NOT A FUNCTION TO functionWithCache`);
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) cache[key] = myFunction(...args);
        return cache[key];
    }
}

export const getFromObj = key => (obj = {}) => obj[key];

export const pipeFromObj = (...functions) => {
    return functionWithCache(state => {
        let result = state;
        for (let i = 0, end = functions.length; i < end; i++) {
            if (typeof functions[i] !== 'function') throw new Error(`PARAM AT POSITION: ${i} IS NOT A FUNCTION TO PIPE`);
            result = functionWithCache(functions[i])(result);
        }
        return result
    })
}