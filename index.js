const { path } = require('@vuepress/shared-utils')
module.exports = (options, context) => ({
  name: 'vuepress-plugin-musicPlayer',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: 'musicPlayer',
});