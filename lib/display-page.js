const displayPage = (page) => {

  let returnString = `<li><a href="${page.url}">${page.title}</a>`
  if(page.links.length > 0) {
    returnString += '<ul>';
    const linkedPages = page.links.map(page => displayPage(page));
    returnString = returnString.concat(...linkedPages);
    returnString += '</ul>';
  }
  returnString += '</li>';
  return returnString;
}

module.exports = displayPage;