const expect = require("chai").expect;
const PageFactory = require("../utils/pageObjects/pageFactory");
const initialLoginPage = PageFactory.getPage("Initial");
const loginPage = PageFactory.getPage("Login");
const homePage = PageFactory.getPage("Home");
const myProfilePage = PageFactory.getPage("MyProfile");
const microsoftLoginPage = PageFactory.getPage("Microsoft");
const {mauseClick, scrollTo, hover} = require('../utils/helpers/actionsFunctions');
const {wait, open, waitUntilVisible} = require("../utils/helpers/functions");


describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        await loginPage.typeLogin();
        await loginPage.typePassword();
        await mauseClick(await loginPage.signInButton.element);
        await loginPage.clickSendMePush();
        await microsoftLoginPage.clickYes();
        await homePage.waitForFirstNavigationButton();
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        await myProfilePage.waitForFirstRecentBadge();
        const countOfRecentBadges = await myProfilePage.getCountOfRecentBadges();
        const appreciationBadge  = await myProfilePage.categorizedBadges.collection.get(3);
        await waitUntilVisible(appreciationBadge);
        await scrollTo(appreciationBadge);
        const firstAppreciationBadge = await myProfilePage.appriciationsSection.collection.get(0);
        await hover(firstAppreciationBadge);
        await wait(2);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});