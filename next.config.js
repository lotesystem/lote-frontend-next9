const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production';


module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        // Enables/Disables or setups number of loaders applied before CSS loader.
        importLoaders: 1,
        localIdentName: isProd ? '[hash:base64:5]' : '[local]___[hash:base64:5]',
    },
    // Custom Next.js configuration now no need to import global _variables.scss again and again
    // It is automatically available on every `.scss` file that you will create.
    webpack(config) {
        config.module.rules.push({
            enforce: 'pre',
            test: /.scss$/,
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    './public/scss/abstract/_variables.scss'
                ]
            }
        });
        return config;
    }
});
