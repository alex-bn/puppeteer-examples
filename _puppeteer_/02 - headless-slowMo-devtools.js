'use strict';
const puppeteer = require('puppeteer');

describe('Puppeteer #2', () => {
  //
  it('Should launch the browser with options', async function () {
    const browser = await puppeteer.launch({
      //
      headless: false,
      slowMo: 10,
      devtools: false,
      timeout: 3000,
    });
    const page = await browser.newPage();

    const start = Date.now();
    await page.goto('http://example.com/');
    const foo = await page.waitForSelector('h1');
    if (foo) console.log('Took', Date.now() - start, 'ms');

    await browser.close();
  });
});
