'use strict';

import assert from 'assert';
import puppeteer from 'puppeteer';
import dataLogIn from '../../data/login.json';

let browser = null;
let page = null;

describe('Logging in to a site', () => {

    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        
        jest.setTimeout(60000);
    });

    afterAll(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        await page.goto('http://www.phptravels.net/login');
    });

    test('Test the Login with correct credentials', async() => {
        try {
            await page.focus('#loginfrm > div.panel.panel-default > div.wow.fadeIn.animated > div > div:nth-child(1) > input');
            await page.keyboard.type(dataLogIn.user_valid.username);
            await page.focus('#loginfrm > div.panel.panel-default > div.wow.fadeIn.animated > div > div:nth-child(2) > input');
            await page.keyboard.type(dataLogIn.user_valid.password);
            await page.click('#loginfrm > button');

            await page.waitForNavigation();

            const title = await page.title();
            assert.equal(title, 'My Account');
        } catch (error) {
            console.log(error);
        }
    });

})
