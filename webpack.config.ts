import * as path from 'path';
import * as webpack from 'webpack';

function Root(...paths: string[]) {
    return path.join(__dirname, ...paths);
}

const base: webpack.Configuration = {
    context: '.',

};

const client: webpack.Configuration = {
    ...base,

    name: 'client',
    target: 'web',

};

const server: webpack.Configuration = {
    ...base,

    name: 'server',
    target: 'node',

};

export default [client, server];