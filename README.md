# surge-cli-action

[![Deploy](https://github.com/uiolee/surge-cli-action-test/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/uiolee/surge-cli-action-test/actions/workflows/deploy.yml)

Surge is bundled so you can use it directly without installing Surge via package manager.

## Usage

> [!IMPORTANT]
> This action have bundled [`surge`](https://www.npmjs.com/package/surge) package.
> So you didn't need `npm install surge`

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/surge-cli-action)](https://github.com/uiolee/surge-cli-action/tags)
[![GitHub Tag](https://img.shields.io/github/v/release/uiolee/surge-cli-action)](https://github.com/uiolee/surge-cli-action/releases)

```yml
- uses: uiolee/surge-cli-action@v0.27.3
  with:
    surge-args: "./dist https://example.surge.sh"
    surge-token: ${{ secrets.SURGE_TOKEN }}
```

> The above action will be performed like the following command:
>
> ```bash
> surge ./dist https://example.surge.sh --token ${{ secrets.SURGE_TOKEN }}
> ```

## Inputs

| Input         | Required?                                               | Default Value | Description                                    |
| ------------- | ------------------------------------------------------- | ------------- | ---------------------------------------------- |
| `surge-args`  | Required                                                | `-h`          | works like execing cmd `surge ${surge-args}`   |
| `surge-token` | Required if doesn't using `--token xxx` in `surge-args` |               |                                                |
| `surge-email` | Optional                                                |               | Just prevent surge print out yout eamil in log |

## Outputs

NULL

## Example

<details>

<summary>uiolee/surge-cli-action-test</summary>

- publish project to domain - [deploy.yml#L87-L91](https://github.com/uiolee/surge-cli-action-test/blob/c0999d4ab3f74343c653fa20dc4d4cb4a5494dc0/.github/workflows/deploy.yml#L87-L91)

- check analytics showing bandwidth usage - [deploy.yml#L81-L85](https://github.com/uiolee/surge-cli-action-test/blob/c0999d4ab3f74343c653fa20dc4d4cb4a5494dc0/.github/workflows/deploy.yml#L81-L85)

</details>

## Versioning

This versioning of this action **does not** use semver.

The version number of this action represents the version of the [surge](https://www.npmjs.com/package/surge) in the bundle.

**Currently** no plans to provide old versions.
