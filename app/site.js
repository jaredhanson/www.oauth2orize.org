exports = module.exports = function(packageRegistry, blog, sitemapProtocol, robotsProtocol, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.oauth2orize.org');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.use('/news', blog);
  //site.use('/packages', packageRegistry);

  site.content('content');

  site.use(sitemapProtocol);
  site.use(robotsProtocol);
  site.use(cname);
  
  return site;
};

exports['@require'] = [
  'io.modulate/comp/lang/javascript/packages/registry/www/site',
  'http://i.kerouacjs.org/blog/Site',
  'org.kerouacjs/sitemap/protocol',
  'org.kerouacjs/robots/protocol',
  'http://i.kerouacjs.org/dns/cname/Site'
];
