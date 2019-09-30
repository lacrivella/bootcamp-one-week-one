// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { isCorrect } from '../functions.js';
const test = QUnit.test;

test('should return false if the user says no', function(assert) {
   const userAnswer = 'no';
   const userAnswerIsCorrect = isCorrect(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});