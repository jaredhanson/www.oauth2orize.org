exports = module.exports = function(packages, sitemap, robots, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.oauth2orize.org');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.use('/packages', packages);

  site.content('content');

  site.use(sitemap);
  site.use(robots);
  site.use(cname);
  
  return site;
};

exports['@require'] = [
  'http://io.modulate/comp/lang/javascript/packages/WWWSite',
  'http://i.kerouacjs.org/www/sitemap/Site',
  'http://i.kerouacjs.org/www/robots/Site',
  'http://i.kerouacjs.org/dns/cname/Site'
];
