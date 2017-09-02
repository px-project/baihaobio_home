import { API, Body, Header, Params, Query } from './types';
import { Url } from './url';

interface HttpOptions {

}

interface FetchOptions {

}

export class Http<T> {

    private options: HttpOptions;

    constructor(options: HttpOptions) {
        this.options = options;
    }

    get(options: FetchOptions): Promise<T[]> {
        return this.buildMethod('GET', options);
    }

    post(options: FetchOptions): Promise<T> {
        return this.buildMethod('GET', options);
    }

    private buildMethod(method: 'GET' | 'POST', options: FetchOptions) {
        return new Promise({});
    }
}
