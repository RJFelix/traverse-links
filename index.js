const fs = require('fs');

const fetchPage = require('./lib/fetch-page.js');
const parsePage = require('./lib/parse-page.js');
const displayPage = require('./lib/display-page.js');

const url = 'https://github.com/Xelif/link-library';

let headPage;

fetchPage(url)
  .then((page) => {
    const returned = parsePage(page);
    headPage = returned.page;
    return returned; 
  })
  .then((parsed) => {
    return Promise.all(parsed.unparsedLinks.map((url) => fetchPage(url)));
  })
  .then((fetchedPages) => {
    console.log(fetchedPages);
    const parsedPages = fetchedPages.map((page) => parsePage(page));
    parsedPages.forEach((page) => headPage.addLink(page.page));
  })
  .then(() => {
    fs.writeFile('./output/output.html', displayPage(headPage), (err) => console.log(err));
  })
  .catch((err) => console.log(err));

