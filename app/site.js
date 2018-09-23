exports = module.exports = function(packages, blog, sitemap, robots, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.oauth2orize.org');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.use('/news', blog);
  //site.use('/packages', packages);

  site.content('content');

  site.use(sitemap);
  site.use(robots);
  site.use(cname);
  
  return site;
};

exports['@require'] = [
  'http://schemas.modulate.io/js/comp/lang/javascript/packages/registry/WWWSite',
  'http://i.kerouacjs.org/blog/Site',
  'http://i.kerouacjs.org/www/sitemap/Site',
  'http://i.kerouacjs.org/www/robots/Site',
  'http://i.kerouacjs.org/dns/cname/Site'
];
