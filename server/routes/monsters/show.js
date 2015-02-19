'use strict';

var setActive = require('../../views/helpers/active');
var Monster = require('../../models/monster');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Monster.findOne({_id:request.params.monsterId}, function(err, monster) {
      Client.find(function(err, clients) {
        reply.view('templates/monsters/show', {path: '/monsters', setActive:setActive, monster:monster, clients:clients});
      });
    });
  }
};
