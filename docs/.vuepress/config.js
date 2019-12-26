const { description } = require("../../package");
const { escapeHtml } = require("@vuepress/shared-utils");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Archdocs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    base: "docs",
    dest: process.env.deploy_public,
    lastUpdated: "Last Updated",
    smoothScroll: true,
    search: true,
    searchPlaceholder: "Search...",
    // algolia: {
    //   appId: 'LQGBD47E98',
    //   apiKey: 'b66c5c39591a49b4f73022f4d802d87e',
    //   indexName: 'archdocs',
    //   algoliaOptions: { facetFilters: ["version:v2"] }
    // },
    // I18n
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        lastUpdated: "Last Updated",
        sidebar: [
          genSidebarContent(),
          genSidebarProcess(),
          genSidebarSecurity(),
          genSidebarTechnology(),
          genSidebarProjects()
        ]
      },
      "/jp/": {
        label: "日本語",
        selectText: "言語",
        ariaLabel: "言語を選択",
        lastUpdated: "最終更新",
        sidebar: [
          jp_genSidebarContent(),
          jp_genSidebarProcess()
        ]
      }
    }
  },
  /**
   * Setting I18n
   */
  locales: {
    "/": {
      lang: "en-US"
    },
    "/jp/": {
      lang: "ja-JP"
    }
  },
  postcss: {
    plugins: [
      require("postcss-import"),
      require("tailwindcss"),
      require("postcss-nested"),
      require("autoprefixer")
    ]
  },
  /**
   * Option API page，ref：https://vuepress.vuejs.org/plugin/option-api.html#extendpagedata
   */
  extendPageData($page) {
    const { regularPath, frontmatter = {} } = $page;
    const notFoundPath = "/404.html";

    if (frontmatter.permalink) return;

    if (regularPath === "/404.html") {
      $page.path = notFoundPath;
    } else if (regularPath.endsWith(".html")) {
      $page.path = regularPath.slice(0, -5) + "/";
    }
  },
  /**
   * Option API markdown，ref：https://vuepress.vuejs.org/plugin/option-api.html#extendmarkdown
   */
  markdown: {
    // extendMarkdown: md => {
    //   const origRender = md.render.bind(md)
    //   md.render = (src, env) => {
    //     src = src.replace(/:::escape((.|\n)*?):::/gm, (m, p1) => escapeHtml(p1).trim())
    //     return origRender(src, env)
    //   }
    // }
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#"
    }
  },
  // chainMarkdown (config) {
  //   require("@vuepress/markdown").removeAllBuiltInPlugins(config)
  // },
  /**
   * Config assets，ref：https://vuepress.vuejs.org/plugin/option-api.html#extendmarkdown
   */
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     "@assets": path.resolve(__dirname, "../assets")
    //   }
    // }
  },
  /**
   * Apply plugins，ref：https://vuepress.vuejs.org/plugin/#examples
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-nprogress",
    "@vuepress/last-updated",
    "@vuepress/search",
    {
      searchMaxSuggestions: 10
    },
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }
  ]
};

/**
 * Content sidebar
 * <path>, <sidebar_title>
 */
function genSidebarContent() {
  return {
    title: "Content",
    children: [
      ["/getting-started/", "Getting started"]
    ]
  };
}

function jp_genSidebarContent() {
  return {
    title: "コンテンツ",
    children: [
      ["/jp/getting-started/", "入門"]
    ]
  };
}

/**
 * Process sidebar
 * <path>, <sidebar_title>
 */
function genSidebarProcess() {
  return {
    title: "Process development",
    children: [
      ["/process/", "Getting started"],
      ["/process/requirement-analysis/", "Requirement Analysis"],
      ["/process/design/", "Design"],
      ["/process/implementation/", "Implementation"],
      ["/process/security/", "Security"],
      ["/process/manageproject/", "Management"],
      ["/process/release/", "Release"]
    ]
  };
}

function jp_genSidebarProcess() {
  return {
    title: "プロセス開発",
    children: [
      ["/jp/process/", "はじめに"],
      ["/jp/process/requirement-analysis/", "計画および要件分析"],
      ["/jp/process/design/", "アーキテクチャーおよび設計"],
      ["/jp/process/implementation/", "実装"],
      ["/jp/process/security/", "セキュリティ"],
      ["/jp/process/manageproject/", "管理"],
      ["/jp/process/release/", "リリース"]
    ]
  };
}

/**
 * Security sidebar
 * <path>, <sidebar_title>
 */
function genSidebarSecurity() {
  return {
    title: "Security",
    children: [
      ["/security/", "Getting started"],
      ["/security/azuread/", "Azure AD"],
      ["/security/identityserver/", "Identity Server"],
      ["/security/nuxt/", "Nuxt"],
      ["/security/vuepress/", "Vuepress"]
    ]
  };
}

/**
 * Security sidebar
 * <path>, <sidebar_title>
 */
function genSidebarTechnology() {
  return {
    title: "Technology",
    children: [
      ["/technology/", "Getting started"],
      ["/technology/AzureFunction/", "Azure Function"],
      ["/technology/JAMstack/", "JAMStack"],
      ["/technology/Serverless/", "Serverless"],
      ["/technology/SPA/", "Single Page Application"],
      ["/technology/Vuepress/", "Vuepress"],
      ["/technology/HeadlessCMS/", "Headless CMS"]
    ]
  }
}

/**
 * Projects sidebar
 * <path>, <sidebar_title>
 */
function genSidebarProjects() {
  return {
    title: "Projects",
    children: [
      ["/projects/sshpoc/", "SSHPoc"]
    ]
  }
}
