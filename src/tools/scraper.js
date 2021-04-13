const fs = require("fs");
const puppeteer = require('puppeteer');

(async () => {

  // Settings
  const searchTerms = [
    'mes',
    'yapay zeka',
  ];
  const screenshot = true

  
  const browser = await puppeteer.launch({ headless: true });
  const today = new Date().getDate();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });


  for (let i = 0; i < searchTerms.length; i++) {
    const query = searchTerms[i];
    await page.goto(`https://www.google.com/search?q=${query}`);
    await page.waitForTimeout(2000);

    let queryData = await page.evaluate(() => {
      let queries = [];
      let queriesElms = document.querySelectorAll('div.g');
      queriesElms.forEach((queryelement) => {
        let resultJSON = {};
        try {
          resultJSON.name = queryelement.querySelector('h3').innerText;
          resultJSON.domain = queryelement.querySelector('cite').innerText;
          resultJSON.pageDate = queryelement.querySelector('span.f').innerText;
        }
        catch (exception) {
        }
        queries.push(resultJSON);
      });
      return queries;
    });

    console.dir(queryData)
    if (screenshot) {
      await page.screenshot({
        path: `../screenshots/${today}-${query}.jpg`,
        type: "jpeg",
      });
      console.log("Also your screenshots is ready! 📸  Go to ../screenshots/");
    }
    const data = JSON.stringify(queryData);
    fs.writeFile(`../search_results/${query}.json`, data, 'utf8', (err) => {
      if (err) {
        console.log(`Error writing file: ${err}`);
      } else {
        console.log(`Query of ${query} is written successfully! 👍 `);
      }
    });
  }
  console.log("Done! 🚀");
})();
