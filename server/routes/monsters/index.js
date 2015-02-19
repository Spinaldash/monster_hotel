'use strict';

var setActive = require('../../views/helpers/active');
var Monster = require('../../models/monster');
var _ = require('lodash'); //requiring a module so we just use the name

module.exports = {
  handler: function(request, reply) {
    var q = request.query

    q = _.pick(q, function(v) {
      return v;
    });

    if(q.min) {
      q.age = {$gte : q.min}
      delete q.min;
    }

    if(q.max) {
      q.age = q.age || {};
      _.merge(q.age, {$lte : q.max});
      delete q.max;
    }

    q.isAdopted = false;

    Monster.find(q, function(err, monsters) {
      reply.view('templates/monsters/index', {path: '/monsters', setActive:setActive, monsters:monsters});
    }).sort( {name: 1 });
  }
};
