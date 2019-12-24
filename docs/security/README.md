---
title: "Authentication"
description: The goal of these tutorial is to walk you through how to implement authentication to your application.
titleBorder: true
---

These tutorials describe security features to an application. That is implemented by using the [OAuth2.0](https://oauth.net/2/), [OpenID Connect](https://openid.net) authentication service provider to access to our services like docs, SPA application,...

## Authentication service provider

- [Azure Active Directory (Azure AD)](https://azure.microsoft.com/en-us/services/active-directory/)
- [Identity Server 4](https://identityserver.io)

#### Currently supports the following authorization flows:

- Implicit flow: This flow is designed for user-agent only apps (e.g., single page web application).

> Which OAuth2.0 flow should I use?
=> [Auth0](https://auth0.com/docs/api-auth/which-oauth-flow-to-use#authorization-code-grant-with-pkce)

#### Is the Client a Single Page App?
If the Client is a Single Page App, an application running in a browser using a scripting language like JavaScript, there are two grant options: the `Authorization Code Grant using Proof Key for Code Exchange (PKCE)` and the `Implicit Grant`. For most cases, we recommend using the [`Authorization Code Grant with PKCE`](https://auth0.com/docs/flows/concepts/auth-code-pkce).

## Implicit Grant
Implicit grants improve the responsiveness and efficiency of some clients (such as a client implemented as an in-browser application),since it reduces the number of round trips required to obtain an access token. **However, this convenience should be weighed against
the security implications of using implicit grants.**

> Issue security with [Implicit Grant 10.3](https://tools.ietf.org/html/rfc6749#section-10.3)
> [Implicit Grant 10.16](https://tools.ietf.org/html/rfc6749#section-10.16)

## References

- [What is authentication](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-authentication-scenarios)
- [Difference authentication and authorization](https://auth0.com/docs/authorization/concepts/authz-and-authn)
- [OAuth2](https://oauth.net/2/)
- [OAuth2 Grant types](https://oauth.net/2/grant-types/)
- [OpenID Connect](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-openid-connect-code)
- [Implicit flow Auth0](https://auth0.com/docs/flows/concepts/implicit)
- [Implicit Grant](https://tools.ietf.org/html/rfc6749#section-4.2)
- [Implicit Grant OpenID Connect](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-oauth2-implicit-grant-flow)
