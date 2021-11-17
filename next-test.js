'use strict';
const puppeteer = require('puppeteer');

// Puppeteer #42

async function run() {
  let browser = null;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    const start = Date.now();
    await page.goto('https://cnn.com', { waitUntil: 'networkidle2' });
    console.log('Took', Date.now() - start, 'ms');
  } catch (error) {
    console.log(error);
  } finally {
    if (browser) browser.close();
  }
}

run();
