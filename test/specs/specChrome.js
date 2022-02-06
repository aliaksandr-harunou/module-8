const expect = require("chai").expect;
const PageFactory = require("../utils/pageObjects/pageFactory");
const initialLoginPage = PageFactory.getPage("Initial");
const loginPage = PageFactory.getPage("Login");
const homePage = PageFactory.getPage("Home");
const myProfilePage = PageFactory.getPage("MyProfile");
const {mauseClick, scrollTo, hover} = require('../utils/helpers/actionsFunctions');
const {wait, open, waitUntilVisible} = require("../utils/helpers/functions");


describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        await initialLoginPage.clickSignInWithEpamCreds();
        await loginPage.typeLogin();
        await loginPage.typePassword();
        const signInButton = await loginPage.signInButton.element;
        await mauseClick(signInButton);
        await wait(Math.floor(Math.random() * 20));
        await loginPage.clickSendMePush();
        await homePage.waitForFirstNavigationButton();
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        await myProfilePage.waitForFirstRecentBadge();
        const countOfRecentBadges = await myProfilePage.getCountOfRecentBadges();
        const appreciationsBadges  = await myProfilePage.categorizedBadges.collection.get(3);
        await waitUntilVisible(appreciationsBadges);
        await scrollTo(appreciationsBadges);
        await wait(2);
        const firstBadgeOfappreciationBadge = await myProfilePage.appriciationsSection.collection.get(0);
        await hover(firstBadgeOfappreciationBadge);
        await wait(2);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});