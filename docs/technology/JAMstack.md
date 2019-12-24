---
title: JAMStack
titleBorder: true
---

## Definition

**`Solution stack`** or **`Software stack`** is a set of software subsystems or components needed to create a complete platform such that no additional software is needed to support applications.

:::tip
***JAM stack*** is *not about specifics technologies*. It’s new way to building websites and application based on:

* client-side **JavaScript** (J)

*	reusable server side **APIs** (A)

*	prebuilt **Markup** file (M)
:::

*	JAM stack project **do not rely on web server**, JAM stack just *load JavaScript that receives data from APIs and markup generated using a static site generator during deploy time*.

## Why use JAM stack

>	**Better performance**: it uses the static files are prerender during deploy time without any interference or back end delays.

>	**Cheaper and Easier** to **scale**: JAM site only content few files with minimal size that can be served anywhere.

>	**Higher Security**: do not need to worry about server or database error.

>	**Better developer experience**: front end developers can focus on the front end only.

## Conclusions

*	Many apps can fall under the JAM stack umbrella, ranging from simple blogs to e-commerce websites to more complex Web Apps.

* Kind of project should not be built with JAMstack:

  * A site built with server-side CMS (WordPress, Drupal, …).

  * A monolithic server-run web app that relies on backend language (Ruby, Node, …).

  * A single page app that uses isomorphic rendering to build views on the server at runtime.

*In the JAMstack architect*:

:point_right: Building and hosting process is decoupled. Hence, developers can build the project locally or using continuous deployment solutions and deploy the built files to CDN.

:point_right: A user requests a page. The file is already compiled and gets directly served to the browser from a CDN.

:point_right: Core update is pushed using Git and the site is rebuilt using modern build tools like static sites generators
