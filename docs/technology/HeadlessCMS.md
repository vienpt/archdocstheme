---
title: Build docs site for customer
description: How to build docs site for customer with their custom's environment
titleBorder: true
---

# Solution

Use `headless CMS` that can help you build docs site with customize layout, content, auto publish, and easy management.

How do you know which headless CMS is right for your docs site? In this post, we’ll walk through important decisions to consider and weigh the pros and cons of three headless CMS options.

## Defining our headless CMS requirements

1. This headless CMS has to be free to use, and free to host.
2. This headless CMS has to be robust enough to grow with the site over time.
3. This headless CMS has to work with frontend frameworks like Vuepress.

No headless CMS is truly free. They have some requirements and option that gives us the power and flexibility for the lowest cost.

There are open source projects that provide code for free, but we have to host it somewhere (we are using `Azure storage`).

## Option #1. Headless WordPress
## Option #2. Headless Ghost
## Option #3. Netlify CMS (tried)

Netlify created a free headless CMS. That use cloud git servies like Github and Gitlab as `the backend` for your content.

It's free but have an limitation if we want to use that to manage large files like images and videos.

Pros:

- Can quickly and easy setting environment (include new or existing project)
- Working well with Github/Gitlab repositories
- Can authenticate with OAuth providers: Github, Gitlab, Bitbucket
- Free host your static site (if not custom domain): <your_site_name>.netlify.com

Cons:

- That just require their identity for authenticate (Netlify identity + Git gateway) => It's mean we have to deploy to their site.
- Using Github/Gitlab
    Netlify auth server just work on `localhost` but anywhere else (`other storage your site`) is confusing. That cannot auth by their auth server. If we want to auth by Github/Gitlab or other auth without Netlify identity > We have to build own authenticate server. (github/gitlab auth APIs or other auth APIs)