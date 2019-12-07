module.exports = function(api) {
    const env = api.env();

    api.cache.using(() => env === 'development');

    const plugins = [
        ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
        ['@babel/plugin-transform-destructuring', { useBuiltIns: true, loose: true }],
        ['@babel/plugin-transform-template-literals', { loose: true }],
        ['@babel/plugin-transform-arrow-functions', { spec: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { lose: true }],
        ['@babel/plugin-transform-classes', { loose: true }],
        ['@babel/plugin-transform-spread', { loose: true }],
    ];

    if (env === 'node') {
        plugins.push('dynamic-import-node');
    } else {
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'entry',
                    corejs: '3.0.1',
                    shippedProposals: true,
                    spec: true,
                    loose: false,
                    debug: false,
                    targets: {
                        node: '8.12.0',
                    },
                    modules: 'commonjs',
                },
            ],
        ],
        plugins,
    };
};
