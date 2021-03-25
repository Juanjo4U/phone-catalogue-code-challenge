export interface BaseObject {
    [key: number]: any;
    [key: string]: any;
};

export type AnyFunction = (...args: Array<any>) => any;