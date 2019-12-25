---
title: Azure Active Directory
description: How to register Azure Active Directory
titleBorder: true
---

[What is Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis)

## Register Authentication

Create new registration in `App registration` from menu Azure Active Directory.

![azureAD](/images/azuread.png)

Go to app has created. Then click Authentication, input Redirect URI

    <your_domain_name>
    <your_domain_name>/signin-oidc

![azuread_setting](/images/azuread_setting.png)

Enable the implicit grant flow:

![azuread_implicitgrant](/images/azuread_implicitgrant.png)

> Check Access tokens if your app require authorize apis.
