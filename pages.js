var kerouac = require('kerouac');
var book = require('kerouac-book');

module.exports = [
  kerouac.contentCrawler(),
  [ '/concepts/oauth2', book.createMapper('books/concepts/oauth2', false) ],
  //[ require('kerouac-sitemap').browser({ index: true }), false ],
  [ require('kerouac-robotstxt').browser(), false ]
];
