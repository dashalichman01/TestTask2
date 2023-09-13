const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    main: MainPage
}

Given(/^User is located on the (\w+) page of saucedemo website$/, async (page) => {
    await pages[page].open()
});

When(/^User click login button$/, async () => {
    await MainPage.submit()
});

Then(/^User should see (.*)$/, async (message) => {
    await expect(SecurePage.errrorMessage).toBeExisting();
    await expect(SecurePage.errrorMessage).toHaveText(message);
});

