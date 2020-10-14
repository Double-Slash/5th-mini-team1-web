module.exports = {
  devServer: {
    overlay: false,
    host: "0.0.0.0",
    port: "3000",
    disableHostCheck: true,
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "어디있니??????",
    },
  },
};
