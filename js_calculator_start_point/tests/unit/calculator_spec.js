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
  it('should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5)
  })
  it('should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })
  it('should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })
  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })
  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(5);
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 759)
  })
  it('should chain multiple operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  })
  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  })

});
