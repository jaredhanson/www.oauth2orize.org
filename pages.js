var kerouac = require('kerouac');
var gitbook = require('kerouac-gitbook');
var sitemap = require('kerouac-sitemap');
var robots = require('kerouac-robotstxt');

module.exports = {
  '/': [
    kerouac.content.createMapper(),
    sitemap.createMapper({ index: 'sitemap-index.xml' }),
    robots.createMapper()
  ],
  '/concepts/oauth2': gitbook.createMapper('books/concepts/oauth2')
};
