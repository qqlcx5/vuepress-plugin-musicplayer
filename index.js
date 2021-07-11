const { path } = require('@vuepress/shared-utils')
module.exports = (options, context) => ({
  define() {
    const { showAllRank, baseUrl } = options
    return {
      SHOWALLRANK: showAllRank || false,
      BASEURL: baseUrl || false,
    }
  },
  name: 'vuepress-plugin-musicPlayer',
  enhanceAppFiles: [path.resolve(__dirname, './bin/enhanceAppFile.js')],
  globalUIComponents: 'musicPlayer',
})
