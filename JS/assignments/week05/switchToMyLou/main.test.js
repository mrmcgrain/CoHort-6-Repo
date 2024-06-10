const assert = require('assert');
const { dayOfWeek, identifySeason, menuSelection } = require('./main.js');

describe('Switch Statement Assignment Tests', function () {

    // Problem 1: Day of the Week
    describe('Problem 1: Day of the Week', function () {
        it('Should return the correct day for a given numerical input', function () {
            assert.strictEqual(dayOfWeek(1), 'Monday');
            assert.strictEqual(dayOfWeek(3), 'Wednesday');
            assert.strictEqual(dayOfWeek(6), 'Saturday');
        });
    });

    // Problem 2: Season Identification
    describe('Problem 2: Season Identification', function () {
        it('Should return the correct season for a given numerical input', function () {
            assert.strictEqual(identifySeason(1), 'Winter');
            assert.strictEqual(identifySeason(4), 'Spring');
            assert.strictEqual(identifySeason(7), 'Summer');
            assert.strictEqual(identifySeason(10), 'Autumn');
        });
    });

    // Problem 3: Menu Selection
    describe('Problem 3: Menu Selection', function () {
        it('Should return the correct message based on the user\'s selection', function () {
            assert.strictEqual(menuSelection(1), 'Option 1 selected');
            assert.strictEqual(menuSelection(2), 'Option 2 selected');
            assert.strictEqual(menuSelection(3), 'Option 3 selected');
            assert.strictEqual(menuSelection(5), 'Invalid choice');
        });
    });
});

