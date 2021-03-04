var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

    // calculator.add() - add 4 to 1, get 5
    it('it can add 4 to 1 and return 5', function () {
      calculator.previousTotal = 1;
      calculator.add(4);
      assert.strictEqual(calculator.runningTotal, 5);
    })

      // calculator.subtract() subtract 4 from 7 and get 3
  it('it can subtract 4 from 7 and get 3', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  }) 
});
