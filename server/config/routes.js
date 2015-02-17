'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},
  {method: 'get', path: '/monsters', config: require('../routes/monsters/index')},
  {method: 'get', path: '/monsters/new', config: require('../routes/monsters/new')},
  {method: 'post', path: '/monsters', config: require('../routes/monsters/create')}

];
