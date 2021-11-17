'use strict';
const puppeteer = require('puppeteer');

describe('Puppeteer #3', () => {
  //
  it('Should pause/wait the test', async function () {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto('http://example.com/');
    await page.waitForSelector('h1');

    // pause test / implicit wait
    await page.waitForTimeout(10000);
    await browser.close();
  });
});
