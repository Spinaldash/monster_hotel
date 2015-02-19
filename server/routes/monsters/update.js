'use strict';

var Monster = require('../../models/monster');

module.exports = {
  handler: function(request, reply) {
    Monster.findByIdAndUpdate(request.params.monsterId, request.payload, function() {
      reply.redirect('/monsters/' + request.params.monsterId);
    });
  }
};
