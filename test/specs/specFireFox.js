const expect = require("chai").expect;
const PageFactory = require("../utils/pageObjects/pageFactory");
const initialLoginPage = PageFactory.getPage("Initial");
const loginPage = PageFactory.getPage("Login");
const homePage = PageFactory.getPage("Home");
const microsoftLoginPage = PageFactory.getPage("Microsoft");
const myProfilePage = PageFactory.getPage("MyProfile");
const {scrollTo} = require('../utils/helpers/actionsFunctions');
const {wait, open, waitUntilVisible} = require("../utils/helpers/functions");
const EC = protractor.ExpectedConditions;

describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        await initialLoginPage.clickSignInWithEpamCreds();
        await loginPage.typeLogin();
        await loginPage.typePassword();
        await loginPage.clickSignIn();
        await wait(10); // to avoid clicking at the same time
        await loginPage.clickSendMePush();
        await microsoftLoginPage.clickYes();
        await homePage.waitForFirstNavigationButton();
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        await myProfilePage.waitForFirstRecentBadge();
        const countOfRecentBadges = await myProfilePage.getCountOfRecentBadges();
        const appreciationBadge  = await myProfilePage.categorizedBadges.collection.get(3);
        await waitUntilVisible(appreciationBadge);
        await scrollTo(appreciationBadge);
        await wait(2);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});