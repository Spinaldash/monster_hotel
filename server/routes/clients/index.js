'use strict';

var setActive = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
      reply.view('templates/clients/index', {path: '/clients', setActive:setActive});
  }
};
