const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { // babel 转义的配置选项
              babelrc: false,
              presets: [
                require.resolve('@babel/preset-react'),
                [require.resolve('@babel/preset-env'), { modules: false }],
              ],
              cacheDirectory: true,
            },
          },
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        },
        {
            test: /\.svg/,
            use: ['file-loader']
           }

      ]
    }
  };