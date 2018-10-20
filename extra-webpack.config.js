const reactRule = [{
  test: /\.jsx$/,
  loader: "babel-loader",
  options: {
    presets: ['@babel/react'],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
    ]
  }
}];

module.exports = {
  module: {
    rules: reactRule
  }
}