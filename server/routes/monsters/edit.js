'use strict';

var setActive = require('../../views/helpers/active');
var Monster = require('../../models/monster');


module.exports = {
  handler: function(request, reply) {
    Monster.findOne({_id:request.params.monsterId}, function(err, monster) {
      var species = ['Demon', 'Dragon', 'Faerie', 'Feral', 'Slime'];
      reply.view('templates/monsters/edit', {path: '/monsters', setActive:setActive, monster:monster, species:species});
    });
  }
};
