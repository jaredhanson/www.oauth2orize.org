//require('bixby')('org.kerouacjs/main', { dev: true });

var kerouac = require('kerouac');

var site = kerouac();
site.engine('pug', require('pug'));

site.set('base url', 'http://www.oauth2orize.org');
site.set('layout engine', 'pug');
site.locals.pretty = true;

site.use('/concepts/oauth2', require('kerouac-book')('OAuth 2.0', 'books/concepts/oauth2', { layout: 'book' }));
site.content('content');

site.generate([
    kerouac.contentCrawler(),
    [ '/concepts/oauth2', require('kerouac-book').browser('books/concepts/oauth2', false) ],
  ],
  function(err) {
    console.log('DONE!');
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });
