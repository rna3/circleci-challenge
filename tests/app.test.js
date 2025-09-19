describe("Button click test", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display text when button is clicked", async () => {
    await page.click("#myButton");
    await page.waitForSelector("#message");
    const text = await page.$eval("#message", el => el.innerText);
    expect(text).toBe("Hello from CircleCI!");
  });
});
