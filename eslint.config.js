import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import markdown from "eslint-plugin-markdown";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: {
      markdown,
    },
  },
  {
    files: ["**/*.md"],
    processor: "markdown/markdown",
  },
  {
    // 1. Target ```js code blocks in .md files.
    files: ["**/*.md/*.js"],
    rules: {
      // 2. Disable other rules.
      "no-console": "off",
      "import/no-unresolved": "off",
    },
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "vue/multi-word-component-names": ["off"], // Vue 3 不再强制要求组件名称是多个单词
    },
  },
  {
    ignores: [".vitepress/dist/*", ".vitepress/cache/*"],
  },
];
