const Element = require("../baseElements/baseElement");
const Collection = require("../baseElements/baseCollection");
const EC = protractor.ExpectedConditions;

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", "CSS", ".uui-caption");
        this.giveBadgeButton = new Element("Give Badge Button", "CSS", "#heroesGiveBadge");
        this.searchField = new Element("Search for a person", "CSS", ".uui-input");
    };
    async clickGiveBadgeButton(){
        await this.giveBadgeButton.click();
    };
    async waitForGiveBadgeButton() {
        await browser.wait(EC.visibilityOf(this.giveBadgeButton.element), 30000);
    }
};

module.exports = Header;