var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();

var page;

chai.use(chaiAsPromised);


describe('library app scenarios', function(){
  this.timeout(50000);

  beforeEach(function(){
    page = new Page();
    page.visit('http://library-app.firebaseapp.com');
  });//closes beforeEach

  afterEach(function(){
    page.quit();
  });//closes afterEach

  it('Typing valid email changes button opacity to 1', function(){
    var btn = page.requestBtn();
    btn.opacity.should.eventually.equal('1');
  });

  it('Typing a valid email enables request button', function(){
    var btn = page.requestBtn();
    btn.opacity.should.eventually.be.true;
  });

  it('Clicking request invitation triggers a confirmation message', function(){
  var alert =  page.alertSuccess();
  alert.should.eventually.contain('Thank you!');
  });
});
