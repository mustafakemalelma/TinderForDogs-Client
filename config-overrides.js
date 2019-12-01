const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#5F4B8B",
      "@error-color": "#FF0000",
      "@input-placeholder-color": "rgba(32, 32, 32, 0.6)"
    }
  })
);
