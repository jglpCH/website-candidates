const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const trackingCodes = {
  beni: 'UA-134076868-2',
  jeanine: 'UA-134076868-4',
  lukas: 'UA-134076868-3',
  manuel: 'UA-134076868-1',
  vivi: 'UA-134076868-5',
  sven: 'UA-134076868-6'
};

const buildFor = 'sven';

process.env.VUE_APP_ANALYTICS_TAG = trackingCodes[buildFor];

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@content': path.resolve(__dirname, 'src/content/' + buildFor),
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
