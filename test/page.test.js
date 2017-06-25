const expect = require('expect');

const Page = require('../model/page.js');

describe('Page model', () => {

  it('should create an object', () => {
    const testPage = new Page();
    expect(testPage).toBeAn(Object);
  });

  it('should store data fields correctly', () => {
    const testData = {
      title: 'Awesome page',
      content: 'lorem ipsum dolor',
      url: 'https://www.github.com/awesome/page',
    };

    const testPage = new Page(testData);

    expect(testPage.title).toEqual('Awesome page');
    expect(testPage.content).toEqual('lorem ipsum dolor');
    expect(testPage.url).toEqual('https://www.github.com/awesome/page');
    expect(testPage.links).toBeAn(Array);
  });

  it('should add an outgoing link', () => {

    const testData1 = {
      title: 'Awesome page',
      content: 'lorem ipsum dolor',
      url: 'https://www.github.com/awesome/page',
    };

    const testPage1 = new Page(testData1);

    const testData2 = {
      title: 'Super page',
      content: 'yay fun',
      url: 'https://www.google.com/awesome/page',
    };

    const testPage2 = new Page(testData2);

    testPage1.addLink(testPage2);

    expect(testPage1.links[0]).toBe(testPage2);
  });


});