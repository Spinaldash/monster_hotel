'use strict';

var setActive = require('../../views/helpers/active');
var Monster = require('../../models/monster');


module.exports = {
  handler: function(request, reply) {
    Monster.findOne({_id:request.params.monsterId}, function(err, monster) {
      reply.view('templates/monsters/show', {path: '/monsters', setActive:setActive, monster:monster});
    });
  }
};
