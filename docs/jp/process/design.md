# アーキテクチャーおよび設計

詳細な設計になると、アプリケーションのアーキテクチャを設計し、モデルと展開の依存関係を簡単に作成できるツールを使用します。For example, our services implemented on Single-Page web applications.

![spa_development](/images/architecture_development_spa.png)

## Use cases

また、詳細な計画の一部として、ユースケース、コンポーネントの依存関係および相互接続図を設計し、データベーススキーマをモデル化するために使用できます。
たとえば、図4はastah Professionalのユースケース図を示しています。

<img src="/images/architec_Design_Modeling.png" width="" height=""/><br />

**図4**ユースケース図

<!-- <br />

また、設計段階で役立つガイドを提供します。 これには、アプリケーションのタイプの典型的な設計に関するアーキテクチャ情報が含まれ、ソフトウェアが要件を満たしていることを確認します。
たとえば、図5は、ASP.NET Core MVCを使用するWebアプリケーションを示しています。ASP.NETCore MVCは、Model-View-Controllerデザインを組み合わせたDDDパターンを使用してWebアプリとAPIを構築するためのリッチフレームワークです。 -->

## Server-side development

Creating RESTful services, also known as as web APIs, using [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1). To create a web API, reference [docs here](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio). For example, Figure 5 shows architecture for backend side.

![serverside](/images/architec_design_model_backend_.png)

**Figure 5**. Application layer architecture for backend

## Client-side development

The most web application is using modern single page application [(SPA)](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa-services?view=aspnetcore-3.1) frameworks. That is an ideal choice for internal company applications and customer-facing sites such as Angular, Reactjs, and Vuejs.

[Vuejs](https://vuejs.org) is a progressive framework for building user interfaces. Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

<!-- <img src="/images/architec_design_model_backend_.png" width="" height=""/><br />

**図5**バックエンドのアプリケーション層アーキテクチャ

## セキュリティ

Webアプリケーションのセキュリティは、アプリケーションのコードの脆弱性を悪用するさまざまなセキュリティの脅威からWebサイトとオンラインサービスを保護するプロセスです。 認証とは、リクエストで提供された資格情報を信頼できるデータストア内の資格情報と比較するプロセスです。 承認は、ユーザーIDに基づいて特定のリソースへのアクセスを制限するプロセスです。 たとえば、図5は、KeyCloakであるクライアントからの要求を保護することに関する3番目のセキュリティ上の懸念を示しています。

### Web APIの保護

<img src="/images/architect_design_security.png" width="" height=""/><br />

**図5-1**Web APIのトークンベースの認証

## クライアントコミュニケーション

ほとんどのWebアプリケーションは、最新の単一ページアプリケーションフレームワークを使用しています。 これは、社内のアプリケーションや、Angular、Reactjs、Vue.jsなどの顧客向けサイトに最適です。 -->
