<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/website/static/img/sdk-header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="/website/static/img/sdk-header.svg">
  <img alt="Starlight Next SDK logo" src="/website/static/img/sdk-header.svg">
</picture>

# Starlight Next SDK

This is the official Starlight SDK for Next applications, which makes integrating Starlight
content into your apps a real breeze.

You can read the usage guide and the API reference in [its documentation page](https://next.sdk.starlight.sh).

## Quick Start

To quickly start using the Next SDK, install it into your project:

```shell
npm install @starlightcms/next-sdk
```

Then, import the SDK and configure which Starlight workspace it should request data from:

```js
import Starlight from '@starlightcms/next-sdk'

Starlight.configure({
  workspace: '1234567890'
})
```

And, finally, start requesting data and rendering content:

```jsx
import Starlight, { VisualContent } from '@starlightcms/next-sdk'

// Listing all entries from the 'posts' model.
const response = Starlight.posts.entries.list()

// Getting content from the 'hello-world' entry.
const response = Starlight.posts.entries.get('hello-world')

// Rendering visual editor content:
<VisualContent content={response.data.data.content} />
```

The SDK is capable of requesting a myriad of different content from your workspaces. Check out 
[the documentation](https://next.sdk.starlight.sh/docs/intro) to learn more.

## React and JavaScript SDKs

If you don't use Next, take a look at our [React SDK](https://github.com/starlightcms/react-sdk) or
[JavaScript SDK](https://github.com/starlightcms/js-sdk), as they provide functionality specific to React or Vanilla JS
applications respectively.

## Issues

If you have any questions or you're facing any issues with the SDK, feel free to [open an issue](https://github.com/starlightcms/next-sdk/issues).
