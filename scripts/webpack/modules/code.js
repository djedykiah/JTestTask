// Constants
import { SOURCE } from '../../constants';

export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test:    /\.m?js$/,
                include: SOURCE,
                use:     {
                    loader: 'babel-loader',
                },
            },
            {
                test:    /\.jsx?$/,
                include: SOURCE,
                use:     {
                    loader: 'babel-loader',
                },
            }
        ],
    },
});
