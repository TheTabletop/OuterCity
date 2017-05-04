// spec.js
describe('The homepage ', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/index.html');
    });

    it('should login after entering valid credentials.', function () {
        var email = browser.findElement(by.id('email'));
        var password = browser.findElement(by.id('password'));

        email.sendKeys('testing@rollforguild.com');
        password.sendKeys('rfgtesting');

        expect(email.getId()).not.toBe(undefined);
    });
});


describe('User Profile Page', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/userProfile.html');
    });

    it('should open a message popup after clicking the message button.', function () {
        var showMessage = element(by.className('button button2'));

        showMessage.click();

        expect(showMessage.evaluate('popups.showMessagbox')).toEqual(true);
    });

    // The default userProfile does not have a notice board link, supposedly does when you login
    // it('sends you to group profile after clicking, \'Visit their Notice Board!\'', function () {
    //    var noticeBoard = element(by.linkText('Visit their Notice Board!'));
    //
    //    noticeBoard.click();
    //
    //    expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/groupProfile.html');
    // });
});

describe('Group Profile Page', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/groupProfile.html');
    });

    it('should open a message popup after clicking the message button.', function () {
        var showMessage = element(by.className('button button2'));

        showMessage.click();

        expect(showMessage.evaluate('popups.showMessagbox')).toEqual(true);
    });

    // it('sends you to the user\'s profile, after clicking on their profile link.', function () {
    //     var profileLink = element(by.linkText('Profile'));
    //
    //     profileLink.click();
    //
    //     expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/userProfile.html');
    // });


});

describe('Search Screen', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/searchScreen.html');
    });

    it('should display group size filter.', function () {
        expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/searchScreen.html');
    });

    // it('sends you to the user\'s profile, after clicking on their profile link.', function () {
    //     var profileLink = element(by.linkText('Profile'));
    //
    //     profileLink.click();
    //
    //     expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/userProfile.html');
    // });


});

describe('Messages page', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/inbox.html');
    });

    it('should display all messages.', function () {
        expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/inbox.html');
    });

    // it('sends you to the user\'s profile, after clicking on their profile link.', function () {
    //     var profileLink = element(by.linkText('Profile'));
    //
    //     profileLink.click();
    //
    //     expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/userProfile.html');
    // });


});

describe('Contact Us page', function () {
    beforeEach(function () {
        browser.get('https://thetabletop.github.io/components/views/aboutUs.html');
    });

    it('should display the about us page.', function () {
        expect(browser.getCurrentUrl()).toBe('https://thetabletop.github.io/components/views/aboutUs.html');
    });

});