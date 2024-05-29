const assert = require('assert');
const colorDeconstructor = require('./color-deconstructor.js');
const isValidPrimary = require('./is-valid-primary.js');
const isValidSecondary = require('./is-valid-secondary.js');
const colorCombinator = require('./color-combinator.js');

describe('colorDeconstructor', () => {
  it('returns the two colors a color comes from', () => {
    assert.strictEqual(colorDeconstructor('orange'), 'red and yellow');
    assert.strictEqual(colorDeconstructor('purple'), 'red and blue');
    assert.strictEqual(colorDeconstructor('green'), 'blue and yellow');
  });
});

describe('isValidPrimary', () => {
  it('returns whether the given color is a valid primary color', () => {
    const validPrimary1 = 'red';
    const validPrimary2 = 'yellow';
    const validPrimary3 = 'blue';
    const invalidPrimary1 = 'orange';
    const invalidPrimary2 = 'blorgon';
    const invalidPrimary3 = 'ted';
    assert.strictEqual(isValidPrimary(validPrimary1), true);
    assert.strictEqual(isValidPrimary(validPrimary2), true);
    assert.strictEqual(isValidPrimary(validPrimary3), true);
    assert.strictEqual(isValidPrimary(invalidPrimary1), false);
    assert.strictEqual(isValidPrimary(invalidPrimary2), false);
    assert.strictEqual(isValidPrimary(invalidPrimary3), false);
  });
});

describe('isValidSecondary', () => {
  it('returns whether the given color is a valid secondary color', () => {
    const validSecondary1 = 'orange';
    const validSecondary2 = 'purple';
    const validSecondary3 = 'green';
    const invalidSecondary1 = 'red';
    const invalidSecondary2 = 'black';
    const invalidSecondary3 = 'white';
    assert.strictEqual(isValidSecondary(validSecondary1), true);
    assert.strictEqual(isValidSecondary(validSecondary2), true);
    assert.strictEqual(isValidSecondary(validSecondary3), true);
    assert.strictEqual(isValidSecondary(invalidSecondary1), false);
    assert.strictEqual(isValidSecondary(invalidSecondary2), false);
    assert.strictEqual(isValidSecondary(invalidSecondary3), false);
  });
});

describe('colorCombinator', () => {
  it('returns the combination of the two given colors', () => {
    assert.strictEqual(colorCombinator('red', 'yellow'), 'orange');
    assert.strictEqual(colorCombinator('yellow', 'red'), 'orange');
    assert.strictEqual(colorCombinator('red', 'blue'), 'purple');
    assert.strictEqual(colorCombinator('blue', 'red'), 'purple');
    assert.strictEqual(colorCombinator('yellow', 'blue'), 'green');
    assert.strictEqual(colorCombinator('blue', 'yellow'), 'green');
  });
});

