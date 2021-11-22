'use strict';
const puppeteer = require('puppeteer');
const { printScreen } = require('./lib/helpers');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    devtools: false,
  });
  const page = await browser.newPage();

  await page.goto('https://bbc.com');

  await page.waitForTimeout(5000);
  await browser.close();
})();
