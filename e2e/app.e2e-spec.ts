import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should display: table and column ', function () {
    expect(element(by.className('mailtable_td'))).toBeTruthy();
  });

  it('should display: get_servicecontainer section ', function () {
    expect(element(by.className('get_servicecontainer2234'))).toBeFalsy();
  });

  it('should display: get_commentscontainer  section ', function () {
    expect(element(by.className('get_commentscontainer'))).toBeTruthy();
  });

});
