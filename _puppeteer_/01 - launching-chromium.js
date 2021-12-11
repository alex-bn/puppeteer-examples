'use strict';
const puppeteer = require('puppeteer');

describe('Puppeteer #1', () => {
  //
  it('Should launch the browser', async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //
    await page.goto('http://example.com/');
    const foo = await page.waitForSelector('h1');
    if (foo) console.log('Page loaded!');
    await browser.close();
  });
});
