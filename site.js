//require('bixby')('org.kerouacjs/main', { dev: true });

var kerouac = require('kerouac');

var site = kerouac();
site.engine('pug', require('pug'));

site.set('base url', 'http://www.oauth2orize.org');
site.set('layout engine', 'pug');
site.locals.pretty = true;

site.content('content');

site.generate([
    kerouac.contentCrawler(),
  ],
  function(err) {
    console.log('DONE!');
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });
