exports = module.exports = function() {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  
  site.set('base url', 'http://www.oauth2orize.org');

  site.engine('ejs', require('ejs'));

  site.use('/packages', require('kerouac-npm-packages')());

  site.content('content');

  site.page('/sitemap.xml', require('kerouac-sitemap')());
  site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
  site.page('/robots.txt', require('kerouac-robotstxt')());
  site.page('/CNAME', require('kerouac-cname')());
  
  return site;
};

exports['@require'] = [
];
