import { API, Body, Header, Params, Query, Method, Methods } from './types';
import { Url } from './url';

interface HttpOptions {

}

interface FetchOptions {
    api: API;
    params?: Params;
    query?: Query;
    body?: Body;
    headers?: Headers;
}

export class Http<T> {
    private _url: Url;

    constructor(private options: HttpOptions) {
        this._url = new Url({});
    }

    get<T>(options: FetchOptions) {
        return this._buildMethod<T>(Methods.GET, options);
    }

    post<T>(options: FetchOptions) {
        return this._buildMethod<T>(Methods.POST, options);
    }

    private _buildMethod<T>(method: Method, options: FetchOptions) {
        const { api, params, query, body } = options;
        const url = this._url.create(api, params, query);

        return new Promise();
    }
}
