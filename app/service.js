exports = module.exports = function(logging) {
  var express = require('express');
  
  
  var app = express();
  
  app.use(logging());
    
  app.use(require('express-static')('www'));
    
  return app;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/logging'
];
