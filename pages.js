var kerouac = require('kerouac');
var book = require('kerouac-book');
var sitemap = require('kerouac-sitemap');
var robots = require('kerouac-robotstxt');

module.exports = {
  '/': [
    kerouac.content.createMapper(),
    sitemap.createMapper({ index: true }),
    robots.createMapper()
  ],
  '/concepts/oauth2': book.createMapper('books/concepts/oauth2', false)
};
