const cheerio = require('cheerio');
const Page = require('../model/page.js');

const parsePage = ({html, url}) => {

  const $ = cheerio.load(html);

  const allLinks = $('a').map((idx, el) => {
    return $(el).attr('href');
  }).get();

  const correctedLinks = allLinks.map((link) => {
    return /^http/.test(link) ? link : `${url}${link}`;
  }).filter((link) => /\/$|htm.*$/.test(link));

  const page = new Page({ 
    title: $('title').text(),
    content: 'placeholder',
    url
  });

  return {
    page,
    unparsedLinks: correctedLinks,
  };

}

module.exports = parsePage;