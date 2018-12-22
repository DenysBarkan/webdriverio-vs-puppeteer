'use strict';

import assert from 'assert';
import puppeteer from 'puppeteer';

let browser = null;
let page = null;

describe('Going to a site', () => {

    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        
        jest.setTimeout(60000);
    });

    afterAll(async() => {
        await browser.close();
    });

    test('Test the Going to a site', async() => {
        try {
            await page.goto('http://webdriver.io');
            const title = await page.title();
            assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        } catch (error) {
            console.log(error);
        }
    });

})
