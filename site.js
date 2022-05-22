//require('bixby')('org.kerouacjs/main', { dev: true });

var kerouac = require('kerouac');
var book = require('kerouac-book');
var sitemap = require('kerouac-sitemap');
var robots = require('kerouac-robotstxt');

var site = kerouac();
site.engine('pug', require('pug'));

site.set('base url', 'https://www.oauth2orize.org');
site.set('layout engine', 'pug');
site.locals.pretty = true;

site.use('/concepts/oauth2', book('books/concepts/oauth2'));
site.use(kerouac.content('content'));

site.page('/sitemap.xml', sitemap());
site.page('/sitemap-index.xml', sitemap.index());
site.page('/robots.txt', robots());

module.exports = site;
