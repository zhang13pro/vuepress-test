const { path } = require("@vuepress/utils")

module.exports = {
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./pages"),
      },
    ],
  ],
}
