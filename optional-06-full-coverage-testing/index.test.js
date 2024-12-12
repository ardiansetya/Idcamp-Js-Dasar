import sum  from './index.js';
import { strict as assert } from 'node:assert';
import { test } from 'node:test';

test('sum adds two numbers correctly', () => {
   // Test: Normal case
   assert(sum(2, 3) === 5, '2 + 3 harus sama dengan 5');

   // Test: Negative numbers
   assert(sum(-1, -2) === 0, '-1 + -2 harus sama dengan 0');

   // Test: Zero as an operand
   assert(sum(0, 5) === 5, '0 + 5 harus sama dengan 5');
   assert(sum(7, 0) === 7, '7 + 0 harus sama dengan 7');

   // Test: Non-number inputs
   assert(sum('a', 2) === 0, 'sum(\'a\', 2) harus sama dengan 0');
   assert(sum(3, null) === 0, 'sum(3, null) harus sama dengan 0');
});
