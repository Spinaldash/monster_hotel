'use strict';

var setActive = require('../../views/helpers/active');
var Monster = require('../../models/monster');


module.exports = {
  handler: function(request, reply) {
    Monster.find({isAdopted: false}, function(err, monsters) {
      reply.view('templates/monsters/index', {path: '/monsters', setActive:setActive, monsters:monsters});
    });
  }
};
