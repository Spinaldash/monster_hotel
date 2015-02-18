'use strict';

var Monster = require('../../models/monster');

module.exports = {
  handler: function(request, reply) {
    var monster = new Monster(request.payload)
    console.log(request.payload);
    monster.save(function() {
      reply.redirect('/monsters');
    });
  }
};
