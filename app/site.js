exports = module.exports = function(packages, sitemap, robots, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  
  site.set('base url', 'http://www.oauth2orize.org');

  site.engine('ejs', require('ejs'));

  //site.use('/packages', require('kerouac-npm-packages')());
  site.use('/packages', packages);

  site.content('content');

  //site.page('/sitemap.xml', require('kerouac-sitemap')());
  //site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
  //site.page('/robots.txt', require('kerouac-robotstxt')());
  site.use(sitemap);
  site.use(robots);
  site.use(cname);
  
  //site.page('/CNAME', require('kerouac-cname')());
  
  return site;
};

exports['@require'] = [
  'http://io.modulate/comp/lang/javascript/packages/WWWSite',
  'http://i.kerouacjs.org/www/sitemap/Site',
  'http://i.kerouacjs.org/www/robots/Site',
  'http://i.kerouacjs.org/dns/cname/Site'
];
