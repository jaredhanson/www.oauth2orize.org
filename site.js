var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://www.oauth2orize.org');

site.engine('ejs', require('ejs'));

site.content('content');

site.page('/CNAME', require('kerouac-cname')());


site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
