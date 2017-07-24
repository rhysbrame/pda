var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('is possible to add numbers', function(){
   calculator.add(10)
   assert.equal(calculator.runningTotal, 10)
 })

  it('is possible to subtract', function(){
    calculator.previousTotal = 10
    calculator.subtract(10)
    assert.equal(calculator.runningTotal, 0)
  })

  it('is possible to multiply', function(){
    calculator.previousTotal = 10
    calculator.multiply(2)
    assert.equal(calculator.runningTotal, 20)
  })

  it('is possible to divide', function(){
    calculator.previousTotal = 10
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 5)
  })

  it('is possible to divide two numbers to give a float', function(){
   calculator.previousTotal = 11
   calculator.divide(2)
   assert.equal(calculator.runningTotal, 5.5)
 })

  it('is possible to add with operatorClick', function(){
   calculator.numberClick(3)
   calculator.operatorClick('*')
   calculator.numberClick(5)
   calculator.operatorClick('=')
   assert.equal(calculator.runningTotal, 15)
 })

  it('is possible to multiply with numberClick and operatorClick from runningTotal', function(){
   calculator.numberClick(5)
   calculator.numberClick(0)
   calculator.operatorClick('*')
   calculator.numberClick(2)
   calculator.operatorClick('=')
   assert.equal(calculator.runningTotal, 100)
 })

  it('is possible to use multiple operations in one function', function(){
   calculator.numberClick(14)
   calculator.operatorClick('+')
   calculator.numberClick(1)
   calculator.operatorClick('*')
   calculator.numberClick(2)
   calculator.operatorClick('-')
   calculator.numberClick(10)
   calculator.operatorClick('/')
   calculator.numberClick(2)
   calculator.operatorClick('=')
   assert.equal(calculator.runningTotal, 10)
  })

  it('is possible to reset runningTotal', function(){
   calculator.numberClick(42)
   calculator.operatorClick('+')
   calculator.numberClick(91)
   calculator.clearClick()
   assert.equal(calculator.runningTotal, 0)
 })

});
