const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

    // It should update the display of the running total
    it('should update the display of the running total when number buttons are clicked', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#number3')).click();
      element(by.css('#number7')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('137')
    })

    // It should update the display with the result of the operation button when they're clicked
    it('should update the display with the result of the operation when operation buttons are clicked', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number7')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('8')
    })

    // Should chain multiple operations together
  it('should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('36')
  })

// Should be able to function for a variety of numbers
  it('should be able to function for a variety of numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number4')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('119999999988')
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number1')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-12')
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number1')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1.5714285714285714')
  })

  it('should return error when divided by 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal("Error")
  })
});

