'use strict';

var setActive = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/monsters/new', {path: '/monsters', setActive:setActive});
  }
};
