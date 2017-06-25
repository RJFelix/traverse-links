class Page {
  constructor({ title, content, url }) {
    if(!(title && content && url)) {
      throw new Error(`Page created without all parameters. Title: ${title}; Content: ${content}; url: ${url}`);
    }
    this.title = title;
    this.content = content;
    this.url = url;
    this.links = [];
  }

  addLink(link) {
    if(!(link instanceof Page)) {
      throw new Error(`Link added to Page: ${title} was not a Page. Link: ${link}`);
    }
    this.links.push(link);
  }

}

module.exports = Page;