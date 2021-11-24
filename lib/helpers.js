module.exports = {
  // #1
  click: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Could not click on selector: ${selector}.`);
    }
  },

  // #2
  getText: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      return await page.$eval(selector, element => element.innerHTML);
    } catch (error) {
      throw new Error(`Cannot get text from selector: ${selector}.`);
    }
  },

  // #3
  getCount: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      return page.$$eval(selector, elArr => elArr.length);
    } catch (error) {
      throw new Error(`Cannot get count of selector: ${selector}.`);
    }
  },

  // #4
  typeText: async function (page, selector, text) {
    try {
      await page.waitForSelector(selector);
      await page.type(selector, text);
    } catch (error) {
      throw new Error(`Could not type into selector: ${selector}.`);
    }
  },

  // #5
  waitForText: async function (page, selector, text) {
    try {
      await page.waitForSelector(selector);
      await page.waitForFunction(function (selector, text) {
        document.querySelector(selector).innerText.includes(text),
          {},
          selector,
          text;
      });
    } catch (error) {
      throw new Error(`Text: ${text} not found for selector: ${selector}.`);
    }
  },

  // #6
  shouldNotExist: async function (page, selector) {
    try {
      await page.waitForSelector(selector, { hidden: true });
    } catch (error) {
      throw new Error(`Selector: ${selector} should not be visible.`);
    }
  },

  // #7
  takeScreenshot: async function (page) {
    try {
      await page.screenshot({
        path: `screenshot-${new Date().getTime()}.png`,
        type: 'png',
        fullPage: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-console
      console.info(`Failed to take screenshot but test will proceed...`);
      return Promise.resolve();
    }
  },
};
