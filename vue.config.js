const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@content': path.resolve(__dirname, 'src/content/manuel'),
      }
    },
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
            options: {
              interpolate: true,
            }
          },
          {
            loader: "markdown-loader",
          }
        ]
      }],
    },
    plugins: [
      ...(process.env.NODE_ENV !== 'production' ? [] : [new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, '/dist'),
        routes: [
          '/',
          '/positionen',
          '/persoenlich',
          '/kontakt',
        ],
      })]),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'public/',
      });
  }
};
