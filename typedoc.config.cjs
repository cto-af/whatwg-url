'use strict';

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['src/index.ts'],
  out: 'docs',
  cleanOutputDir: true,
  sidebarLinks: {
    Original: 'https://github.com/jsdom/whatwg-url#readme',
    GitHub: 'https://github.com/cto-af/whatwg-url/',
    Documentation: 'http://cto-af.github.io/whatwg-url/',
    URL: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
    URLSearchParams: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams',
  },
  navigation: {
    includeCategories: false,
    includeGroups: false,
  },
  includeVersion: true,
  categorizeByGroup: false,
  sort: ['static-first', 'alphabetical'],
  exclude: ['test/**/*'],
};
