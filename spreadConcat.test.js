import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import { concat } from './spreadConcat.ts';

const testCases = [
  [[], { prop: 'val' }],
  // [null, null],
  // [undefined, 2],
  [[undefined], null],
  [[null], Math.PI],
  [['string'], 'string'],
  [[18], null],
  [[{ prop: 'val' }], { foo: 42 }],
];

Deno.test('recursive concat', () => {
  testCases.forEach(([a, b]) => assertEquals(concat(a, b), a.concat(b)));
});
