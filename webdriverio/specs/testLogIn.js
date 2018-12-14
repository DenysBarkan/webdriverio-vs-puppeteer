'use strict';

import assert from 'assert';
import LoginPage from '../pageobjects/login.page';
import dataLogIn from '../data/login.json';

suite('Account - Log in to a site', () => {
   test('Test the Login with correct credentials', () => {
        LoginPage.open('login');
        LoginPage.logIn(dataLogIn.user_valid.username, dataLogIn.user_valid.password);
        let title = browser.getTitle();
        assert.equal(title, 'My Account');
    });

});
