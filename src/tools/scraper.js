const puppeteer = require("puppeteer");

async function run() {
  const today = new Date().getDate();

  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();

  await page.goto("https://www.twitter.com/konzekteknoloji");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `../screenshots/${today}-konzek-twitter.jpg`,
    type: "jpeg",
  });

  await page.goto("https://www.google.com/search?q=konzek+teknoloji+linkedin");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `../screenshots/${today}-konzek-linkedin.jpg`,
    type: "jpeg",
  });

// const queries = [
// ikinci,
// birinci

// ]
//   await page.goto(`https://www.google.com/search?q=${queries}`);
//   await page.waitForTimeout(2000);
//   await page.screenshot({
//     path: `../screenshots/${today}-${queries}3.jpg`,
//     type: "jpeg",
//   });

  await page.goto("https://www.twitter.com/akademi40org");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `../screenshots/${today}-akademi40-twitter.jpg`,
    type: "jpeg",
  });

  await page.goto("https://www.twitter.com/retmonems");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `../screenshots/${today}-retmon-twitter.jpg`,
    type: "jpeg",
  });

  await page.goto("https://www.twitter.com/retmescom");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `../screenshots/${today}-retmes-twitter.jpg`,
    type: "jpeg",
  });




  await page.close();
  await browser.close();
  console.log("Your screenshots is ready! 📸  Go to ../screenshots/");
}

run();
