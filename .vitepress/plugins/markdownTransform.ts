import type { Plugin } from 'vite'

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return code
      // eslint-disable-next-line no-console
      console.log(id)
      //   code = `<PageInfo :readTime="${1}" :words="${2}"/>\n${code}`;
      //   return code;
    },
  }
}
