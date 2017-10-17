var Page = require('./base_page');

Page.prototype.requestBtn = function(){
  this.write('input', 'user@fakeemail.com');
  return{
    opacity: this.find('.btn-lg').getCssValue('opacity'),
    state: this.find('.btn-lg').isEnabled() //will return true/false
  }
}

  Page.prototype.clickSubmit = function(){
    return this.find('.btn-lg').click();
  }

  Page.prototype.alertSuccess = function(){
    this.requestBtn(); //fills out form
    this.clickSubmit(); //click submit
    return this.find('.alert-success').getText(); //gets the text of messagek
  }

  module.exports = Page;
