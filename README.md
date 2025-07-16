# @cto.af/whatwg-url

This is a quick hack to replace just the external-facing parts of the [whatwg-url](https://github.com/jsdom/whatwg-url#readme) package with the modern, built-in version of URL and URLSearchParams.

## Installation

```sh
npm install @cto.af/whatwg-url
```

Then edit package.json to use this:

```json
{
  "override": {
    "whatwg-url": "$whatwg-url"
  },
  "pnpm": {
    "override": {
      "whatwg-url": "$whatwg-url"
    }
  }
}
```

## API

Full [API documentation](http://cto-af.github.io/whatwg-url/) is available.

Example:

```js
```

---
[![Build Status](https://github.com/cto-af/whatwg-url/workflows/Tests/badge.svg)](https://github.com/cto-af/whatwg-url/actions?query=workflow%3ATests)
[![codecov](https://codecov.io/gh/cto-af/whatwg-url/branch/main/graph/badge.svg?token=N7B7YLIDM4)](https://codecov.io/gh/cto-af/whatwg-url)
