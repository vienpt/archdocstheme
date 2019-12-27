---
title: Headless CMS
description: How to build docs site for customer with their custom's environment
titleBorder: true
---
# Solution

Use `headless CMS` that can help you build docs site with customize layout, content, auto publish, and easy management.

How do you know which headless CMS is right for your docs site? In this post, we’ll walk through important decisions to consider and weigh the pros and cons of three headless CMS options.

![](/images/headless-cms.png)

## Defining our headless CMS requirements

1. This headless CMS has to be free to use, and free to host.
2. This headless CMS has to be robust enough to grow with the site over time.
3. This headless CMS has to work with frontend frameworks like Vuepress.

No headless CMS is truly free. They have some requirements and option that gives us the power and flexibility for the lowest cost.

There are open source projects that provide code for free, but we have to host it somewhere (we are using `Azure storage`).

## Option #1. WordPress (traditional CMS)

## Option #2. Headless Contentful CMS (API-driven)

## Option #3. Headless Netlify CMS (Git-based)

Netlify created a free headless CMS. That use cloud git servies like Github and Gitlab as `the backend` for your content.

It's free but have an limitation if we want to use that to manage large files like images and videos.

*Pros*

* Can quickly and easy setting environment (include new or existing project)
* Working well with Github/Gitlab repositories
* Can authenticate with OAuth providers: Github, Gitlab, Bitbucket
* Free host your static site (if not custom domain): <your_site_name>.netlify.com

*Cons*

* That just require their identity for authenticate (Netlify identity + Git gateway) => It's mean we have to deploy to their site.
* Using Github/Gitlab
    Netlify auth server just work on `localhost` but anywhere else (`other storage your site`) is confusing. That cannot auth by their auth server. If we want to auth by Github/Gitlab or other auth without Netlify identity > We have to build own authenticate server. (github/gitlab auth APIs or other auth APIs)


### How to apply Netlify CMS to Vuepress

</br>

<div class="bg-gray-100 shadow-lg border-l-4 border-blue-600 px-4 py-4">
  <span class="font-bold">Solution 1</span>
  <div class="mt-4" />
  <span class="text-base">Create public/admin folder in .vuepress. Then add filed name <mark>index.html</mark></span>
</div>

``` html
<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VuePress-NetlifyCMS</title>
    <script src="https://cdn.jsdelivr.net/npm/netlify-identity-widget@1.5.2/build/netlify-identity-widget.min.js"></script>
</head>

<body>
    <!-- Include the script that builds the page and powers Netlify CMS -->
    <script src="https://cdn.jsdelivr.net/npm/netlify-cms@2.3.1/dist/cms.js" integrity="sha256-Zv4A5owfOF4cDiraaQ7d66BMIs+XzF6tkmpAn+BAJ5U=" crossorigin="anonymous"></script>
    <script>
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
    </script>
      
</body>

</html>

```

<div class="bg-gray-100 shadow-lg border-l-4 border-blue-600 px-4 py-4">
  <span class="font-bold">Solution 2</span>
  <div class="mt-4" />
  <span class="text-base">Other way integrate Netlify CMS for Vuepress by using enhanceApp.js.
You must push config.yml (Configuration file of Netlify CMS) to .vuepress/public/admin/config.yml
  </span>
  
</div>

**enhanceApp.js**

```js
const Admin = () => import("./Admin");

export default ({ Vue, options, router }) => {
  router.addRoutes([
    {
      path: "/admin",
      component: Admin
    }
  ]);
};
```

**Admin.vue**

```vue
<template>
  
</template>

<script>
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import netlifyIndentityWidget from "netlify-identity-widget";

export default {
  created() {
    window.netlifyIndentityWidget = netlifyIndentityWidget;
    netlifyIndentityWidget.init();
  }
};
</script>
```


## References

* [3 Free Headless CMS's for Your Next Project](https://www.gatsbyjs.org/blog/2019-10-15-free-headless-cms/)

* [About HeadlessCMS and diff API-driven with Git-based](https://headlesscms.org/about/)

* [Git-based or API-driven CMS](https://www.youtube.com/watch?v=KX4G49ZrvY0)
