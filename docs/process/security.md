---
title: Security
description: Web application security is the process of protecting websites and online services against different security threats that exploit vulnerabilities in an application’s code.
titleBorder: true
---

Authentication and authorization are two related words that are often used interchangeably, but mean different things and have very functionality within a system.

`Authentication` is the act of validating that users are who they claim to be.

`Authorization` is a process of giving a user permission to access a specific resources(s) or function(s).

![Auth](/images/security_auth.jpeg)

**Figure 5-1**. Authentication and Authorization.

### Securing web APIs

Server-side comes with setting authentication in ASP.NET Core.
[ASP.NET Core Authentication](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-3.1)

ASP.NET Core Identity allow secure web APIs and SPAs, use one of the following:

* [Azuree Active Directory](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-protect-backend-with-aad)

    Example [here](https://docs.microsoft.com/en-us/azure/active-directory/develop/sample-v1-code)

* [IdentityServer4](http://docs.identityserver.io/en/latest/index.html)


[Example](https://github.com/aspnet/AspNetCore.Docs/tree/master/aspnetcore/security/authentication/identity/sample)

![Auth](/images/architect_design_security.png)

**Figure 5-2**. Token-based authentication for Web APIs.
