# surge-cli-action

[![Deploy](https://github.com/uiolee/surge-cli-action-test/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/uiolee/surge-cli-action-test/actions/workflows/deploy.yml)

Surge is bundled so you can use it directly without installing Surge via package manager.

## Usage

> [!IMPORTANT]
> This action have bundled [`surge`](https://www.npmjs.com/package/surge) package.
> So you didn't need `npm install surge`

```yml
- uses: uiolee/surge-cli-action@v0.23.1
  with:
    surge-args: "./dist https://example.surge.sh"
    surge-token: ${{ secrets.SURGE_TOKEN }}
    surge-email: ${{ secrets.SURGE_EMAIL }} # Just used to mask your email address to prevent it from being displayed in the log of workflow.
```

> The above action will be performed like the following command:
>
> ```bash
> surge ./dist https://example.surge.sh --token ${{ secrets.SURGE_TOKEN }}
> ```

### Example

<details>

<summary>uiolee/surge-cli-action-test</summary>

[deploy.yml#L39-L44](https://github.com/uiolee/surge-cli-action-test/blob/cd8ccb702acebcd78fa8911d7f985fef49e1ad2d/.github/workflows/deploy.yml#L39-L44)

![](./image/showcase.webp)

</details>

## Versioning

This versioning of this action **does not** use semver.

The version number of this action represents the version of the [surge](https://www.npmjs.com/package/surge) in the bundle.

**Currently** no plans to provide old versions.
