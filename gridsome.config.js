// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // if you use scss
        path.resolve(__dirname, './src/assets/sass/global.scss'),
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  siteName: 'Charlotte Tusset',
  siteDescription: 'Charlotte\'s journey as a frontend developer and what drives her forward',
  siteUrl: 'https://charlottetusset.me',
  plugins: [
    {
      use: 'gridsome-plugin-robots-txt',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-127662345-1'
      }
    },

  ]
}
