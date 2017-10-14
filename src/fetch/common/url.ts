import { API, Params, Query } from './types';

interface UrlOptions {

}

export class Url {

    constructor(private _options: UrlOptions) {

    }

    create(api: API, params: Params, query: Query) {
        return '';
    }
}
