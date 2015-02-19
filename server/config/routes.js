'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},
  {method: 'get', path: '/monsters', config: require('../routes/monsters/index')},
  {method: 'get', path: '/monsters/new', config: require('../routes/monsters/new')},
  {method: 'post', path: '/monsters', config: require('../routes/monsters/create')},
  {method: 'get', path: '/monsters/{monsterId}', config: require('../routes/monsters/show')},
  {method: 'post', path: '/monsters/{monsterId}/delete', config: require('../routes/monsters/destroy')},
  {method: 'get', path: '/monsters/{monsterId}/edit', config: require('../routes/monsters/edit')},
  {method: 'post', path: '/monsters/{monsterId}', config: require('../routes/monsters/update')},
  {method: 'post', path: '/monsters/{monsterId}/adopt', config: require('../routes/monsters/adopt')},


  {method: 'get', path: '/clients', config: require('../routes/clients/index')},
  {method: 'get', path: '/clients/new', config: require('../routes/clients/new')},
  {method: 'post', path: '/clients', config: require('../routes/clients/create')},
  {method: 'get', path: '/clients/{clientId}', config: require('../routes/clients/show')},
  {method: 'post', path: '/clients/{clientId}/delete', config: require('../routes/clients/destroy')},
  {method: 'get', path: '/clients/{clientId}/edit', config: require('../routes/clients/edit')},
  {method: 'post', path: '/clients/{clientId}', config: require('../routes/clients/update')}
];
