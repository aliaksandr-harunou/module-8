const BasePage = require("../../basePage/basePage");
const Element = require("../../baseElements/baseElement");

class InitialLoginPage extends BasePage {
  constructor() {
    super();
    this.signInWithEpamButton = new Element("Login field", "ID", "zocial-epam.com");
  };
  
  clickSignInWithEpamCreds() {
    this.signInWithEpamButton.click();
  };

};

module.exports = InitialLoginPage;