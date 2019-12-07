/* eslint-disable no-console */
/* eslint-disable camelcase */

// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE, BUILD } from '../../constants';

// Webpack modules
import {
    loadJavaScript,
    loadFonts,
    loadImages,
    setupHtml,
    setupContextReplacement,
    initializeEnvVariables
} from '../modules';

export default () => {
    const { NODE_ENV } = process.env;

    return merge(
        loadJavaScript(),
        loadFonts(),
        loadImages(),
        setupHtml(),
        setupContextReplacement(),
        initializeEnvVariables({
            __ENV__:    JSON.stringify(NODE_ENV),
            __DEV__:    NODE_ENV === 'development',
            __PROD__:   NODE_ENV === 'production',
        }),
        {
            entry: [
                '@babel/polyfill',
                SOURCE
            ],
            output: {
                path:       BUILD,
                publicPath: '/',
            },
            resolve: {
                extensions: [
                    '.mjs',
                    '.js',
                    '.json',
                    '.svg',
                    '.jpeg',
                    '.png',
                    '.jpg'
                ],
                modules: [ SOURCE, 'node_modules' ],
            },
            optimization: {
                nodeEnv: NODE_ENV,
            },
            stats: false,
        },
    );
};
