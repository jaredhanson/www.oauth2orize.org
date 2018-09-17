var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://www.oauth2orize.org');

site.engine('ejs', require('ejs'));
site.engine('adoc', require('asciidoctor-engine'));

site.use('/docs', require('kerouac-book')('docs'));
//site.use('/packages', require('kerouac-npm-packages')());
site.content('content');
//site.content('docs');

site.page('/sitemap.xml', require('kerouac-sitemap')());
site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
site.page('/robots.txt', require('kerouac-robotstxt')());
site.page('/CNAME', require('kerouac-cname')());


site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
