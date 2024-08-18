import { resolve } from 'node:path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { MarkdownTransform } from './plugins/markdownTransform'

// eslint-disable-next-line no-console
console.log(resolve(__dirname, 'theme/components'), '====')
const config: import('vite').UserConfig = {
  plugins: [
    // custom
    MarkdownTransform(),
    Components({
      dirs: resolve(__dirname, 'theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: '.vitepress/components.d.ts',
      transformer: 'vue3',
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      defaultStyle: 'display: inline-block',
    }),
    UnoCSS(),
  ],
}
export default config
