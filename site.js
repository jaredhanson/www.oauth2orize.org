//require('bixby')('org.kerouacjs/main', { dev: true });

var kerouac = require('kerouac');
var book = require('kerouac-book');

var site = kerouac();
site.engine('pug', require('pug'));

site.set('base url', 'http://www.oauth2orize.org');
site.set('layout engine', 'pug');
site.locals.pretty = true;

site.use('/concepts/oauth2', book('books/concepts/oauth2'));
site.use(kerouac.content('content'));

//site.page('/sitemap.xml', require('kerouac-sitemap')());
//site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
site.page('/robots.txt', require('kerouac-robotstxt')());

module.exports = site;
