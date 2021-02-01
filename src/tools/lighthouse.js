const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

(async () => {
  const URL = "https://konzek.com";
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(URL, options);
  const date = new Date();
  const minutes = date.getMinutes();

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  //
  // add for today
  //  fs.writeFileSync(`./reports/${today}/${URL.replace('https://', '')}-${minutes}.html`, reportHtml);

  fs.writeFileSync(
    `../../public/reports/${URL.replace("https://", "")}-${minutes}.html`,
    reportHtml
  );

  // `.lhr` is the Lighthouse Result as a JS object
  console.log("Report is done for", runnerResult.lhr.finalUrl);
  console.log(
    "Performance score was",
    runnerResult.lhr.categories.performance.score * 100
  );

  await chrome.kill();
})();
