const expect = require("chai").expect;
const PageFactory = require("../utils/pageFactory");
const {mauseClick, scrollTo, hover, highlight, pressENTER} = require('../utils/actionsFunctions');
const EC = protractor.ExpectedConditions;

describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await PageFactory.getPage("Login").open();
        await PageFactory.getPage("Login").typeLogin();
        await PageFactory.getPage("Login").typePassword();
        const signInButton = await PageFactory.getPage("Login").signInButton.element; 
        await mauseClick(signInButton);
        await PageFactory.getPage("Login").wait(Math.floor(Math.random() * 20));
        await PageFactory.getPage("Login").clickSendMePush();
        const yesButton = await PageFactory.getPage("MicrosoftLogin").yesButton.element;  
        await browser.wait(EC.elementToBeClickable(yesButton), 80000);
        await mauseClick(yesButton);
        await PageFactory.getPage("Home").waitForFirstNavigationButton();
        await PageFactory.getPage("Home").Header.navigationButtons.clickElementByText("My Profile");
        await PageFactory.getPage("MyProfile").waitForFirstRecentBadge();
        const countOfRecentBadges = await PageFactory.getPage("MyProfile").getCountOfRecentBadges();
        const appreciationsBadges  = await PageFactory.getPage("MyProfile").categorizedBadges.collection.get(3);
        await browser.wait(EC.visibilityOf(appreciationsBadges), 20000);
        await scrollTo(appreciationsBadges);
        await PageFactory.getPage("MyProfile").wait(3);
        const firstBadgeOfappreciationBadge = await PageFactory.getPage("MyProfile").appriciationsSection.collection.get(0);
        await hover(firstBadgeOfappreciationBadge);
        await PageFactory.getPage("MyProfile").wait(3);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});