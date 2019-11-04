const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        // eslint-disable-next-line quotes
        GATrackingId: `UA-148148901-5`,
        pathPrefix: '/g2'
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'G2',
    description: 'The Grammar of Graphics in JavaScript',
    githubUrl: repository.url,
    docs: [
      {
        slug: 'docs/tutorial',
        title: {
          zh: '使用教程',
          en: 'tutorial'
        }
        // redirect: 'introduction',
        // order: 0
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API 文档',
          en: 'API'
        }
        // order: 3,
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples'
        }
        // redirect: 'line/basic'
      }
    ],
    examples: [
      {
        slug: 'examples/line',
        icon: 'line', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '折线图',
          en: 'Line Charts'
        }
      },
      {
        slug: 'examples/pie',
        icon: 'pie', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '饼图',
          en: 'Pie Charts'
        }
      }
    ]
  }
};
