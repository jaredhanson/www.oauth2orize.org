var kerouac = require('kerouac');

module.exports = [
  kerouac.contentCrawler(),
  [ '/concepts/oauth2', require('kerouac-book').browser('books/concepts/oauth2', false) ],
  //[ require('kerouac-sitemap').browser({ index: true }), false ],
  [ require('kerouac-robotstxt').browser(), false ]
];
