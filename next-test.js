const puppeteer = require('puppeteer');
const { takeScreenshot } = require('./lib/helpers');

(async () => {
  const browser = await puppeteer.launch({ headless: true, slowMo: false });
  const page = await browser.newPage();

  await page.goto('https:/example.com');
  await page.waitForTimeout(3000);
  await takeScreenshot(page);

  await browser.close();
})();
