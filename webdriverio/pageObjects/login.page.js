'use strict';

import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return browser.element('//*[@name="username"]'); }
    get passwordInput()   { return browser.element('//*[@name="password"]'); }
    get logInButton()    { return browser.element('//button[contains(., "Login")]'); }
    
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/login')       //this will append `/login` to the baseUrl to form complete URL
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

    waitForHomePageToLoad () {
      if(!this.usernameInput.isVisible()){
        this.usernameInput.waitForVisible(5000);
      }
    }

    logIn (username, password) {
      this.waitForHomePageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.logInButton.click();
      browser.pause(10000);
    }
}

export default new LoginPage()
