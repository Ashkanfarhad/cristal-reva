const { chromium } = require('playwright-chromium');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://cristalreva.netlify.app', { waitUntil: 'networkidle' });
  
  const html = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log("--- HTML ---");
  console.log(html);
  console.log("--------------------");

  await browser.close();
})();
