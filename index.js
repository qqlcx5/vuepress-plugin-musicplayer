const { path } = require('@vuepress/shared-utils')
module.exports = (options, context) => ({
  define () {
    const { isAllRank } = options
    return {
      ISALLRANK: isAllRank || false,
    }
  },
  name: 'vuepress-plugin-musicPlayer',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: 'musicPlayer',
});