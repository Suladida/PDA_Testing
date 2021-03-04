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

    // Can chain multiple operations together
  it('should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('36')
  })


});
