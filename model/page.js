class Page {
  constructor({ title, content, url }) {
    this.title = title;
    this.content = content;
    this.url = url;
    this.outgoingLinks = [];
  }

}

module.exports = Page;