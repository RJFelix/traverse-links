const expect = require('expect');

const displayPage = require('../lib/display-page.js');
const Page = require('../model/page.js');

describe('displayPage', () => {

  it('should display a page with no links correctly', () => {

    const testPage = new Page({
      title: 'a page',
      content: 'some content',
      url: 'http://www.example.com/',
    });

    const expectedOutput = `<li><a href="${testPage.url}">${testPage.title}</a></li>`;

    expect(displayPage(testPage)).toEqual(expectedOutput);

  });

  it('should display a page with some links correctly', () => {

    const parentPage = new Page({
      title: 'parent',
      content: 'some content',
      url: 'url1',
    });

    const childPage1 = new Page({
      title: 'child 1',
      content: '',
      url: 'url2',
    });

    const childPage2 = new Page({
      title: 'child 2',
      content: '',
      url: 'url3',
    });

    parentPage.addLink(childPage1);
    parentPage.addLink(childPage2);

    const expectedOutput = `<li><a href="${parentPage.url}">${parentPage.title}</a><ul><li><a href="${childPage1.url}">${childPage1.title}</a></li><li><a href="${childPage2.url}">${childPage2.title}</a></li></ul></li>`;

    expect(displayPage(parentPage)).toEqual(expectedOutput);

  });

})