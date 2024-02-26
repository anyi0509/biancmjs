var bian = require('../lib/index');

exports.values = function(t) {
  t.deepEqual(['fei', 20], {name: 'fei', age: 20}.bian().values().toValue());
  t.done();
};

exports.valueIf = function(t) {
  t.deepEqual({name: 1, name2: 2, name3: 3, name4: 4, name5: 5, name6: 6}.bian().valuesIf(function(v) {
    return v > 5;
  }).toValue(), [6]);
  t.deepEqual({name: 'fei', age: 30}.bian().valuesIf(function(v) {
    return typeof v === 'string';
  }).toValue(), ['fei']);
  t.done();
};

exports.pair = function(t) {
  t.deepEqual(({name: 'fei', age: 30}).bian().pair().toValue(), [['name', 'fei'], ['age', 30]]);
  t.done();
};

exports.entry = function(t) {
  t.deepEqual({key1: 'value1', key2: 'value2'}.bian().entry().toValue(), [
    {key: 'key1', value: 'value1'},
    {key: 'key2', value: 'value2'}
  ]);
  t.deepEqual({key1: 'value1', key2: 'value2'}.bian().entry(['k', 'v']).toValue(), [
    {k: 'key1', v: 'value1'},
    {k: 'key2', v: 'value2'}
  ]);
  t.deepEqual({key1: 'value1', key2: 'value2'}.bian().entry().toValue().bian().tail().toValue(), [
    {key: 'key2', value: 'value2'}
  ]);
  t.done();
};

exports.chunkKeysBy2 = function(t) {
  t.deepEqual(
    {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      key5: 'value5',
      key6: 'value6',
      key7: 'value7'
    }.bian().values().toValue().bian().chunk(2).toValue(),
    [['value1', 'value2'], ['value3', 'value4'], ['value5', 'value6'], ['value7']]
  );
  t.done();
};
