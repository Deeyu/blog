module.exports = {
  title: '网站标题',
  base: '/blog/',
  // port: 8888, //
  description: 'Vuepress blog demo',
  markdown: {
    lineNumbers: true
  },
  // 默认语言
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性 （博客文章底部更新时间也会修改为中文时间）
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    lastUpdated: '上次更新',  // 博客文章底部添加更新时间
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: '有新的内容',
        buttonText: '点击更新'
      }
    },
    sidebarDepth: 2, // 侧边栏深度
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/Deeyu/blog',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    // 导航栏
    nav: [
        { text: '首页', link: '/' },
        { text: '我的csdn', link: '/blog/FirstBlog.md' }
    ],
    // 侧边栏
    sidebar: [
      // 数组配置第一个参数是路径 /home/ 指的是 docs 文件夹下的home文件夹下的README.md
      // 第二个参数是侧边栏标题
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客'],
      // 对象配置： 是两级目录 title 是指侧边栏一级标题
      // collapsable: false会让这个二级侧边栏一直展开
      // children里的字段又是一个数组配置，参数含义如上
      // {title: 'vue',
      // collapsable: false,
      // children: [
      // //  路径  /vue/function-api  指的是 docs 文件夹下的vue文件夹下的function-api.md
      //   ['/vue/function-api', ' vue Function API'],
      //   ['/vue/amap', 'vue amap']
      // ]}
    ],
    head: [

    ]
  },
}