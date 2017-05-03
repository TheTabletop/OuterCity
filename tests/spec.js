// spec.js
describe('User Profile Page', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/userProfile.html');
    });

    it('should open a message popup', function () {
        var showMessage = element(by.className('button button2'));

        showMessage.click();

        expect(showMessage.evaluate('popups.showMessagbox')).toEqual(true);
    });

    it('sends you to group profile after clicking, \'Visit their Notice Board!\'', function () {
       var noticeBoard = element(by.linkText('Visit their Notice Board!'));

       noticeBoard.click();

       expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/groupProfile.html');
    });
});
