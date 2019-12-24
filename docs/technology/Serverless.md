---
title: Serverless
titleBorder: true
---

## Introduction

:::tip
**`Serverless`** architecture is a way to build, run applications and services **without manage infrastructure**. Your application still run on servers, but all server management (hardware and software, bandwidth) is done by service Provider.
:::

## Why use Serverless

### The Advantage and Disadvantage of Serverless

<!-- <table>
  <tr>
    <th style="width:300px;">
      Advantage
    </th>
    <th style="width:300px;">
      Disadvantage
    </th>
  </tr>
  <tr>
    <td>
      Reduced time to develop and quicker software release.
    </td>
    <td>
      Difficult for debug.
    </td>
  </tr>
  <tr>
  <td>
      A smaller cost to scale. Developer don’t need to implement code to scale or admin do not need to upgrade existing servers or add additional ones.
    </td>
    <td>
      Performance may be affected.
    </td>
  </tr>
  <tr>
    <td>
      Allow developers to focus on code and to deliver faster.
    </td>
    <td>
      Dependency the cloud provider (vender lock-in).
    </td>
  </tr>
  <tr>
    <td>
      Fits with microservices, which can be implemented as functions.
    </td>
    <td>
      Limited about time, memories, …
    </td>
  </tr>
  <tr>
    <td>
      Charge based on usage => lower prices.
    </td>
    <td>
      Security issues.
    </td>
  </tr>
  <tr>
    <td>
      No need to run at 24/7 (run when have request only).
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      Lower operational and development costs.
    </td>
    <td></td>
  </tr>
</table> -->

:pencil2:	Reduced time to develop and quicker software release.

:pencil2: A smaller cost to scale. Developer don’t need to implement code to scale or admin do not need to upgrade existing servers or add additional ones.

:pencil2:	Allow developers to focus on code and to deliver faster.

:pencil2:	Fits with microservices, which can be implemented as functions.

:pencil2:	Charge based on usage => lower prices.

:pencil2: No need to run at 24/7 (run when have request only).

:pencil2: Lower operational and development costs.

### The disadvantage of serverless:

:pencil2: Difficult for debug.

:pencil2: Performance may be affected.

:pencil2: Dependency the cloud provider (vender lock-in).

:pencil2: Limited about time, memories, …

:pencil2: Security issues.

## Serverless

Serverless divide into two type: `BaaS (Backend as a Service)` and `FaaS (Function as a Service)`. Serverless is also known as **FaaS** if not specific.

### BaaS (Back end as a Service)

::: warning
**BaaS (Back end as a Service)**: the service that code logic is handles as the client side, the server-side can be use **APIs from the third-party**.
:::

**BaaS** advantage:

*	Development speed

* Development price

* Outsource cloud infrastructure management

**BaaS** disadvantage:

* Less flexibility in comparison to custom coding

* Less secure

:point_right: ***BaaS** use cases*: Data management, multimedia, file storage, push notifications, …

### FaaS (Function as a Service)

::: warning
**Faas (Function as a service)**: the service that developer deploy code as a **function**, which can be called by RestAPI.
:::

#### FaaS advantages: 

* Do not need to manage server infrastructure

* Developer focus more on code logic

* Never pay for idle resource

* Built in availability

#### FaaS disadvantages:

* Difficult for debug

* Auto-scaling of function calls often means auto-scaling of cost. This can make it tough to gauge your business expenses.

* Waiting time for handle higher

:point_right: ***FaaS** use cases*: Web Apps, Backends, Data/stream processing, Chatbots, Scheduled tasks, …

#### Popular FaaS provider:

:small_orange_diamond: Azure Functions (Microsoft)

:small_orange_diamond: AWS Lambda Functions (Amazon)

:small_orange_diamond: Google Cloud Functions (Google)


