const path = require("path");

module.exports = {
  entry: "/src/index.jsx", // File di input
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // File di output
  },
  resolve: {
    extensions: [".js", ".jsx"], // Risolve i file .js e .jsx
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Carica i file .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  mode: "development", 
};
