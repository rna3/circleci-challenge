const puppeteer = require('puppeteer');

describe("Button click test", () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should display text when button is clicked", async () => {
    await page.click("#myButton");
    const message = await page.$eval("#message", el => el.textContent);
    expect(message).toBe("Hello from CircleCI!");
  });
});
