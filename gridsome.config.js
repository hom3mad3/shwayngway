// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .use('vue-svg-loader')
    .loader('vue-svg-loader')
},
  siteName: 'shwayngway',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-187246885'
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TZPGNQ5',
        enabled: true,
        debug: false
      }
    }
  ]

}
