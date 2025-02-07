module.exports = {
  babelrc: false,
  presets: [
    'module:@babel/preset-react',
    [
      'module:@babel/preset-env',
      {
        targets: {
          browsers: ['last 3 versions']
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs', '@emotion/babel-plugin']
}
