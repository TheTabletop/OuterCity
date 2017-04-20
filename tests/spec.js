// spec.js
describe('User Profile Page', function() {
  beforeEach(function() {
    browser.get('https://thetabletop.github.io/components/views/userProfile.html');
  });


  it('should send you to the userWall after clicking View Full Profile', function() {
    element(by.buttonText('View Full Profile')).click();
    expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/userWall.html');
  });


  it('should send you to the inbox after clicking the Message button', function() {
    element(by.buttonText('Message')).click();
    expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/inbox.html');
  });
});

describe('Group Profile Page', function() {
  beforeEach(function() {
    browser.get('https://thetabletop.github.io/components/views/groupProfile.html');
  });


  it('should send you to the groupWall after clicking View Full Profile', function() {
    element(by.buttonText('View Full Profile')).click();
    expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/groupWall.html');
  });


  it('should send you to the inbox after clicking the Message button', function() {
    element(by.buttonText('Message')).click();
    expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/inbox.html');
  });
});
