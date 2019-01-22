const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');


module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
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
  }
};
