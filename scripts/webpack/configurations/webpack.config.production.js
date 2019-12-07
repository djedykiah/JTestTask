// Core
import merge from 'webpack-merge';
import SimpleProgressWebpackPlugin from 'simple-progress-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Configurations
import generateCommonConfiguration from './webpack.config.common';

// Webpack modules
import {
    loadProductionCss,
    setupBuildAnalysis,
    setupFavicon,
    cleanBuildDirectory
} from '../modules';

export default () => merge(
    generateCommonConfiguration(),
    loadProductionCss(),
    setupFavicon(),
    cleanBuildDirectory(),
    setupBuildAnalysis(),
    {
        mode:   'production',
        output: {
            filename: 'js/[name].[chunkhash:5].js',
        },
        plugins: [
            new SimpleProgressWebpackPlugin({
                format: 'compact',
            }),
            new CopyWebpackPlugin([
                {
                    from: './static',
                    to:   './static',
                }
            ])
        ],
    },
);
