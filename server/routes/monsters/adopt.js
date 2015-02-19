'use strict';

var Monster = require('../../models/monster');
var Client = require('../../models/client');


module.exports = {
  handler: function(request, reply) {
    Monster.findById(request.params.monsterId, function(err, monster){
      console.log('payload is: ' + JSON.stringify(request.payload) );
      Client.findById(request.payload.clientId, function(err, client){
        console.log('client = ' + JSON.stringify(client));
        debugger;
        client.pets.push(monster._id);
        monster.isAdopted = true
        client.save(function() {
          monster.save(function(){
            reply.redirect('/clients/' + client._id)
          });
        });
      });
    });
  }
};
