import { defineConfig } from 'vitepress'
import viteConfig from './viteConfig'

// https://vitepress.dev/reference/site-config
export default async ({ mode }: { mode: 'production' | 'development' }) => {
  return defineConfig({
    title: 'Mutter Blog',
    description: 'Mutter job and study',
    lang: 'zh_CN',
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: mode === 'production' ? '/blog/avatar.png' : '/avatar.png' }],
    ],
    base: mode === 'production' ? '/blog/' : '/',
    srcDir: 'src', // 指定源目录为src
    metaChunk: true, // 将页面元数据提取到单独的 JavaScript 块中
    lastUpdated: true,
    themeConfig: {
      logo: '/avatar.png',
      siteTitle: 'Mutter',
      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },
      nav: [
        {
          text: '前端基本功',
          items: [
            { text: 'Javascript', link: '/native/' },
            { text: 'Typescript', link: '/typescript/' },
            { text: 'Vue', link: '/vue/' },
          ],
        },
        { text: '生活', link: '/life/' },
        { text: '关于我', link: '/about/' },
      ],

      sidebar: {
        '/life/': [
          {
            text: '杂谈',
            collapsed: true,
            items: [{ text: '工作这两年', link: '/life/talk-jobs' }],
          },
          { text: '读书', link: '/life/books' },
        ],
        '/vue/': [
          {
            items: [{ text: 'Vue介绍', link: '/vue/' }],
          },
        ],
        '/react/': [
          {
            items: [{ text: 'React介绍', link: '/vue/' }],
          },
        ],
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/Mutter45' }],
      search: {
        provider: 'local',
        options: {
          _render(src, env, md) {
            const html = md.render(src, env)
            if (env.frontmatter?.title)
              return md.render(`# ${env.frontmatter.title}`) + html
            return html
          },
        },
      },
      /** 显示最新更新事件配置 */
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium',
        },
      },
    },
    // vite配置
    vite: viteConfig,
  })
}
