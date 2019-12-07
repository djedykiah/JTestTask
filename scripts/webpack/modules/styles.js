// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Constants
import { SOURCE } from '../../constants';

export const loadDevelopmentCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [ SOURCE, /node_modules/ ],
                use:     [
                    {
                        loader:  'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ],
            }
        ],
    },
});

export const loadProductionCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [ SOURCE, /node_modules/ ],
                use:     [ MiniCssExtractPlugin.loader, 'css-loader' ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[contenthash].[hash:5].css',
            chunkFilename: 'css/[contenthash].[hash:5].css',
        })
    ],
});
