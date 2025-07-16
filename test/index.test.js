'use strict';

const assert = require('node:assert');
const {URL: LocalURL, URLSearchParams: LocalURLSearchParams} = require('../lib/index.js');
const test = require('node:test');
const {URL: OldURL, URLSearchParams: OldURLSearchParams} = require('whatwg-url');

test('URL', () => {
  const h = 'https://foo/';
  assert.deepEqual(new LocalURL(h), new URL(h));
  assert.deepEqual(new LocalURL(h), new OldURL(h));
});

test('URLSearchParams', () => {
  const h = 'foo=1&bar=2';
  assert.deepEqual(new LocalURLSearchParams(h), new URLSearchParams(h));
  assert.deepEqual(new LocalURLSearchParams(h), new OldURLSearchParams(h));
});
