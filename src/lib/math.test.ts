import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('Testing math library', () => {
  it('test add function', () => {
    expect(add(1, 2)).toBe(3);
  });
});
