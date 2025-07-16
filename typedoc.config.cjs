'use strict';

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['src/index.ts'],
  out: 'docs',
  cleanOutputDir: true,
  sidebarLinks: {
    GitHub: 'https://github.com/cto-af/whatwg-url/',
    Documentation: 'http://cto-af.github.io/whatwg-url/',
  },
  navigation: {
    includeCategories: false,
    includeGroups: false,
  },
  includeVersion: true,
  categorizeByGroup: false,
  sort: ['static-first', 'alphabetical'],
  exclude: ['**/*.spec.ts'],
};
