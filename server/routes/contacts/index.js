'use strict';

var setActive = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
      reply.view('templates/contacts/index', {path: '/contacts', setActive:setActive});
  }
};
