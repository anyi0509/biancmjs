var functor = require('../lib/functor');
var Bian = require('../lib/index');
var util = require('../lib/util');
var map = Bian.map;

var length = function(s) {
  return s.length
};

exports.identity = function(t) {
  t.equal(Bian.identity('hello').map(length).map(util.concat2('fei')).v, 'fei5');
  t.equal(util.compose(map(length), map(util.concat2('fei')))(Bian.identity('hello')).v, 8);
  t.equal(util.compose(map(util.concat2('fei')), map(length))(Bian.identity('hello')).v, 'fei5');
  t.done();
};