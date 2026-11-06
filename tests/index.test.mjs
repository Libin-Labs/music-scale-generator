import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('generates C major', () => {
  assert.deepEqual(api.scalePitchClasses(0, 'major'), [0, 2, 4, 5, 7, 9, 11]);
});
test('transposes natural minor', () => {
  assert.deepEqual(api.scalePitchClasses(9, 'naturalMinor'), [9, 11, 0, 2, 4, 5, 7]);
});
test('returns pentatonic note count', () => {
  assert.equal(api.scalePitchClasses(4, 'minorPentatonic').length, 5);
});
test('wraps pitch classes at octave', () => {
  assert.ok(api.scalePitchClasses(11, 'major').every((n) => n >= 0 && n < 12));
});
test('returns a fresh result', () => {
  assert.notEqual(api.scalePitchClasses(0, 'major'), api.scalePitchClasses(0, 'major'));
});
test('rejects out-of-range root', () => {
  assert.throws(() => api.scalePitchClasses(12, 'major'), RangeError);
});
