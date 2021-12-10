const HomePage = require("./home_page/home_page");
const MyProfilePage = require("./my_profile_page/my_profile_page");
const LoginPage = require("./login_page/login_page");
const MicrosoftLoginPage = require("./login_page/micr_login_page");
const BasePage = require("./base_page/base_page");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();  
            case "Login":
                return new LoginPage();     
            case "MicrosoftLogin":
                return new MicrosoftLoginPage();  
            case "MyProfile":
                return new MyProfilePage();      
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;