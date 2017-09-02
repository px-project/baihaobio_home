import * as path from 'path';
import * as webpack from 'webpack';

function Root(...paths: string[]) {
    return path.join(__dirname, ...paths);
}

const base: webpack.Configuration = {
    context: '.',

};

export const client: webpack.Configuration = {
    ...base,

    name: 'client',
    target: 'web',

};

export const server: webpack.Configuration = {
    ...base,

    name: 'server',
    target: 'node',

};
