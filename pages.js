//require('bixby')('org.kerouacjs/main', { dev: true });

var kerouac = require('kerouac');

var site = kerouac();
site.engine('pug', require('pug'));

site.set('base url', 'http://www.oauth2orize.org');
site.set('layout engine', 'pug');
site.locals.pretty = true;

site.use('/concepts/oauth2', require('kerouac-book')('books/concepts/oauth2', { layout: 'book/chapter' }));
site.content('content');
//site.page('/sitemap.xml', require('kerouac-sitemap')());
//site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
site.page('/robots.txt', require('kerouac-robotstxt')());

site.generate([
    kerouac.contentCrawler(),
    [ '/concepts/oauth2', require('kerouac-book').browser('books/concepts/oauth2', false) ],
    //[ require('kerouac-sitemap').browser({ index: true }), false ],
    [ require('kerouac-robotstxt').browser(), false ]
  ],
  function(err) {
    console.log('DONE!');
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });
