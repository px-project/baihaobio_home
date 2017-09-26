export type API = string;

export type Param = any;
export type Params = Param[];

export interface Query {
    [name: string]: any;
}

export interface Body {
    [name: string]: any;
}

export interface Header {
    [name: string]: any;
}

export type Method = 'GET' | 'POST';
export const Methods: {[method in Method]: Method } = {
    GET: 'GET',
    POST: 'POST',
};
