module.exports = {
  entry: './public/js/app.js',
  output: { path: __dirname+'/public/js', filename: 'bundle.js' },
  module: {
    rules: [
      {
       test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },

      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: [
         {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
         ]
      }
    ]
  }
};
