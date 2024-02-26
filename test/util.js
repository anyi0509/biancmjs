var util = require('../lib/util');
var curry = require('lodash.curry');

exports.identity = function(t) {
  var values = [1, 'string', true, false, /regex/, {name: 'obj'}];
  t.deepEqual(values.map(util.identity), values);
  t.done();
};

exports.concat = function(t) {
  t.deepEqual(util.concat(1, 2), [1, 2]);
  t.deepEqual(util.concat([1], 2), [1, 2]);
  t.deepEqual(util.concat(null, 2), [null, 2]);
  t.deepEqual(util.concat(1, 2, 3, 4, 5, [6, 7]), [1, 2, 3, 4, 5, 6, 7]);
  t.deepEqual(util.concat([], [], 1), [1]);
  t.done();
};

exports.compose = function(t) {
  var f = util.compose(function(v) {
    return v + 1;
  }, function(v) {
    return v * 2;
  });
  var fempty = util.compose();
  t.equal(f(1), 3);
  t.equal(f(5), 11);
  t.equal(fempty(5), 5);
  t.done();
};

exports.compose2 = function(t) {
  t.deepEqual(util.concat2([1], 2), [1, 2]);
  t.deepEqual(util.concat2([1])(2), [1, 2]);
  t.done();

};

exports.curry = function(t) {
  var add = curry(function(a, b) {
    return a + b;
  });
  t.equal(add(2)(3), 5);
  t.done();
};

exports.splats = function(t) {
  var fn = util.splats(function(a, b, c) {
    return a + '-' + b + '-' + c;
  });
  t.deepEqual(fn([1, true, 'string']), '1-true-string');
  t.done();
};

exports.unsplats = function(t) {
  var fn = util.unsplats(function(arr) {
    return arr.join('-');
  });
  t.equal(fn(1, true, 'string'), '1-true-string');
  t.done();
};
