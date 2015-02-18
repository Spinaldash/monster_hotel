'use strict';

var Monster = require('../../models/monster');

module.exports = {
  handler: function(request, reply) {
    Monster.remove({_id:request.params.monsterId}, function() {
      reply.redirect('/monsters');
    });
  }
};
