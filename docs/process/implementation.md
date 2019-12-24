---
title: Implementation
titleBorder: true
---

In `Archway`, we choose a range of tools and development environments designed to writing code for the many technologies and application types. 

<!-- |               | name     |
| ------------- |:-------------:|
| Tools         | Visual Studio, VS Code, SQL Management, Azure data studio |
| Languages     | C#, Java, Sql, Javascript, Css, Html,...                  |
| Cloud         | Azure, GCP, AWS                                           |
| Infra         | Docker, Kubernetes                                        |
| Technology    | Vuejs, Nuxt, JAMstack sites                               | -->
### Development technologies, tools, and languages

<table style="width:100%">
  <tr>
    <th></th>
    <th>Tech</th>
  </tr>
  <tr>
    <td><b>Tools</b></td>
    <td>Visual Studio, VS Code, SQL Management, Azure data studio</td>
  </tr>
  <tr>
    <td><b>Languages</b></td>
    <td>C#, Java, Sql, Javascript, Css, Html,...</td>
  </tr>
  <tr>
    <td><b>Cloud</b></td>
    <td>Azure, GCP, AWS</td>
  </tr>
  <tr>
    <td><b>Infra</b></td>
    <td>Docker, Kubernetes</td>
  </tr>
  <tr>
    <td><b>Technology</b></td>
    <td>Vuejs, Nuxt, JAMstack sites</td>
  </tr>
</table>

**Figure 6**. Some of the technologies, tools, and languages used during development

### Process

Implement processing:

- **Code:** Break down the tasks, and code.

- **Testing:**  Testing have many process such as: Unit test, Integration test, Smoke test.

- **Review:** Check functions and confirm with design.

- **Deploy**:  Deployment is an important step that leader can review and feedback. We can also analysis code quality by integration tools like `SonarQube` with CI/CD tools such as Gitlab, Azure DevOps, Jenkin CI/CD.

- **Refactor code**: make the code clean and easy to understand to other members.

For example, code before and after refactor:

:point_right: **Before refactor:**

```csharp
public async Task<IActionResult> Delete(string id)
{
    await service.DeleteAsync(id);
    return NoContent();
}
```

* A function name is **Delete** but it is an **async** method.
* **await** method not call **ConfigureAwait(false)**.

:point_right: **After refactor:**

```csharp
public async Task<IActionResult> DeleteAsync(string id)
{
    await service.DeleteAsync(id).ConfigureAwait(false);
    return NoContent();
}
```

* A function has changed to ***DeleteAsync***
* Added **ConfigureAwait(false)** in the method.
