const { Key } = require("protractor");

async function mauseClick(element) {
    // await highlight(element);
    await browser.actions().mouseMove(element).mouseDown().mouseUp().perform();
}

async function scrollTo(element) {
    return await browser.executeScript("arguments[0].scrollIntoView();", element);
}

async function hover(element) {
    return await browser.actions().mouseMove(element).perform();
}

async function pressENTER() {
    return await browser.actions().sendKeys(protractor.Key.ENTER).perform();
}

async function highlight(element) {
    let backgroundColor = await element.getCssValue("background-color");
    await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", element);
    await browser.sleep(100);
    await browser.executeScript("arguments[0].style.backgroundColor = '" + backgroundColor + "'", element);
}


module.exports = {mauseClick, scrollTo, hover, highlight, pressENTER};