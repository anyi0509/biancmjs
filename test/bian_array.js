var Bian = require('../lib/index');

exports.head = function(t) {
  t.deepEqual([1, 2, 3, 4].bian().head().toValue(), 1);
  t.deepEqual([].bian().head().toValue(), (void 0));
  t.done();
};
exports.last = function(t) {
  t.deepEqual([1, 2, 3, 4].bian().last().toValue(), 4);
  t.deepEqual([].bian().last().toValue(), (void 0));
  t.deepEqual([1].bian().last().toValue(), 1);
  t.done();
};

exports.initial = function(t) {
  var f = function() {
  };
  t.deepEqual([].bian().initial().toValue(), []);
  t.deepEqual([1].bian().initial().toValue(), []);
  t.deepEqual([2].bian().initial().toValue(), []);
  t.deepEqual([1, 2].bian().initial().toValue(), [1]);
  t.deepEqual([1, 2, 3, 4, 5, 6, f, 7].bian().initial().toValue(), [1, 2, 3, 4, 5, 6, f]);
  t.done();
};

exports.tail = function(t) {
  t.deepEqual([].bian().tail().toValue(), []);
  t.deepEqual([1].bian().tail().toValue(), []);
  t.deepEqual([1, null].bian().tail().toValue(), [null]);
  t.deepEqual([1, 2, 3, 4].bian().tail().toValue(), [2, 3, 4]);
  t.deepEqual([1, 2, 3, 4].bian().tail().head().toValue(), 2);
  t.done();
};

exports.compact = function(t) {
  t.deepEqual([].bian().compact().toValue(), []);
  t.deepEqual([
    {name: 'js'},
    {name: 'php'},
    {name1: 'scala'},
    '',
    false,
    NaN,
    0,
    undefined,
    null
  ].bian().compact().toValue().length, 3);
  t.done();
};

exports.pick = function(t) {
  t.deepEqual([
    {name: 'js'},
    {name: 'php'},
    {name: 'scala'},
    {name1: 'scala'}
  ].bian().pick('name').toValue(), ['js', 'php', 'scala', (void 0)]);
  t.done();
};

exports.unique = function(t) {
  t.deepEqual(Array(5).bian().unique().toValue(), Array(5));
  t.deepEqual([1, 2, 3, 1].bian().unique().toValue(), [1, 2, 3]);
  t.deepEqual(['', ''].bian().unique().toValue().length, 1);
  t.deepEqual([undefined, undefined].bian().unique().toValue().length, 1);
  t.deepEqual([null, null].bian().unique().toValue().length, 1);
  t.deepEqual([false, false].bian().unique().toValue().length, 1);
  t.deepEqual([NaN, NaN].bian().unique().toValue().length, 2);
  t.done();
};

exports.chunk = function(t) {
  t.deepEqual([1, 2, 3, 4, 5].bian().chunk(2).toValue(), [[1, 2], [3, 4], [5]]);
  t.deepEqual([1, 1, 1, 1, 1].bian().chunk(1).toValue(), [[1], [1], [1], [1], [1]]);
  t.deepEqual([1, 1, 1, 1, 1].bian().chunk(0).toValue(), [[1], [1], [1], [1], [1]]);
  t.deepEqual([1, 1, 1, 1, 1].bian().chunk(-1).toValue(), [[1], [1], [1], [1], [1]]);
  t.deepEqual([1, 1, 1, 1, 1].bian().chunk(5).toValue(), [[1, 1, 1, 1, 1]]);
  t.deepEqual([1, 1, 1, 1, 1].bian().chunk(6).toValue(), [[1, 1, 1, 1, 1]]);
  t.done();
};

exports.zip = function(t) {
  t.deepEqual(
    [[1, 2, 3], [true, false]].bian().zip().toValue(),
    [[1, true], [2, false], [3, undefined]]
  );
  t.deepEqual(
    [[], [true, false]].bian().zip().toValue(),
    [[undefined, true], [undefined, false]]
  );
  //t.deepEqual(
  //    [[,,,,,], [true, false]].bian().zip().toValue(),
  //    [[undefined, true], [undefined, false]]
  //);
  t.deepEqual(
    [[], []].bian().zip().toValue(),
    []
  );
  t.done();
};

exports.zipWith = function(t) {
  t.deepEqual(
    [[1, 2, 3], [true, false, 'string']].bian().zipWith(arr => arr.join('-')).toValue(),
    ['1-true', '2-false', '3-string']
  );
  t.deepEqual(
    [[1, 2, 3], [true, false, 'string']].bian().zipWith(Bian.splats((a, b, c) => a)).toValue(),
    [1, 2, 3]
  );
  t.done();
};

exports.uniqueBy = function(t) {
  t.deepEqual([
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3},
    {name: 'fei', id: 1}
  ].bian().uniqueBy('id').toValue(), [
    {name: 'fei', id: 1},
    {name: 'liu', id: 2},
    {name: 'fl', id: 3}
  ]);
  t.done();
};
