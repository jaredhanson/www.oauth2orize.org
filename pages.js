var kerouac = require('kerouac');
var book = require('kerouac-book');
var robots = require('kerouac-robotstxt');

module.exports = [
  kerouac.content.createMapper(),
  [ '/concepts/oauth2', book.createMapper('books/concepts/oauth2', false) ],
  //[ require('kerouac-sitemap').browser({ index: true }), false ],
  [ robots.createMapper(), false ]
];
