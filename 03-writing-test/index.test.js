import { sum } from './index.js';
import { strict as assert } from 'node:assert';
import { test } from 'node:test';

test('sum adds two numbers correctly', () => {
   assert(sum(2, 3) === 5, '2 + 3 harus sama dengan 5');
   assert(sum(-1, 1) === 0, '-1 + 1 harus sama dengan 0');
   assert(sum(0, 0) === 0, '0 + 0 harus sama dengan 0');
});
