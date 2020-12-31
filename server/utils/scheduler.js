const { CronJob } = require('cron');

const productWebscraping = require('./productWebscraping');

/* productWebscraping runs for 1 product only.  
Should we have array of products, and run the same webscraper per item? 
promise.all() since each item will need it's own promise?
*/

const arr = ['https://www.google.com/shopping/product/6800853825567825150','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsYjn0L116UNMpPLLbaGOkv91x5j-V2INz5wAOMOfgHtVYVZSzVVexCMOHMxYUUhjQIcwXsFD0_MPt-vW7yGLV5qzK1yW_8X8OTzHk7A9MXzEOknweZ_9Zr5sIsss&usqp=CAY']
 
const newScrape = new CronJob('* * * * *', async (array) => {
  console.log('inside newScrape cronJob');

  await productWebscraping().run();

  //   console.log('result is ', result);
});

// newScrape.start();
