# 実装

`Archway`では、多くのテクノロジーとアプリケーションタイプのコードを記述するために設計されたさまざまなツールと開発環境を選択します。

<!-- |               | name     |
| ------------- |:-------------:|
| ツール         | Visual Studio, VS Code, SQL Management, Azure data studio |
| 言語     | C#, Java, Sql, Javascript, Css, Html,...                  |
| Cloud         | Azure, GCP, AWS                                           |
| インフラ         | Docker, Kubernetes                                        |
| テクノロジー    | Vuejs, Nuxt, JAMstack sites                               | -->
## 開発テクノロジー、ツール、言語

<table style="width:100%">
  <tr>
    <th></th>
    <th>テック</th>
  </tr>
  <tr>
    <td><b>ツール</b></td>
    <td>Visual Studio, VS Code, SQL Management, Azure data studio</td>
  </tr>
  <tr>
    <td><b>言語</b></td>
    <td>C#, Java, Sql, Javascript, Css, Html,...</td>
  </tr>
  <tr>
    <td><b>Cloud</b></td>
    <td>Azure, GCP, AWS</td>
  </tr>
  <tr>
    <td><b>インフラ</b></td>
    <td>Docker, Kubernetes</td>
  </tr>
  <tr>
    <td><b>テクノロジー</b></td>
    <td>Vuejs, Nuxt, JAMstack sites</td>
  </tr>
</table>

**図6**開発中に使用される技術、ツール、言語の一部

## プロセス

実装プロセス

- **実装**：タスクを分解して実装します。

- **テスト**：テストは単体テスト、結合テスト、スモークテストなど、たくさんテスト種類があります。

- **レビュー**：機能をして設計と比較します。

- **デプロイ**：展開は、リーダーが確認およびフィードバックできる重要なステップです。また、Gitlab, Azure DevOps, Jenkin CI/CDなどのCI/CDツールと`SonarQube` などの統合ツールでコードの品質を分析することができます。

- **コードのリファクタリング**：コードをクリーンにし、他のメンバーに分かりやすくします。

例えば、リファクタリングの前後のコード

:point_right: **前**

  ```csharp{1,3}
  public async Task<IActionResult> Delete(string id)
  {
      await service.DeleteAsync(id);
      return NoContent();
  }
  ```

* 関数名は**Delete**ですが、実は**async**メソッドです。.
* **await**メソッドは**ConfigureAwait(false)**を呼び出しません。

:point_right: **後**

  ```csharp{1,3}
  public async Task<IActionResult> DeleteAsync(string id)
  {
      await service.DeleteAsync(id).ConfigureAwait(false);
      return NoContent();
  }
  ```

* 関数名は**DeleteAsync**に変換しました。
* メソッドに**ConfigureAwait(false)**を追加しました。
