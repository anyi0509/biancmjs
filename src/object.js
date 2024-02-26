import {compose, identity, concat} from './util';

var o2a = function(obj, convert, connect, decorators = [(obj) => obj.rst]) {
  return Object.keys(obj).reduce((carry, key, i, arr) => {
    return connect(carry, compose(...decorators)({
      v: obj[key], key, i, arr, carry,
      rst: convert(obj[key], key, i, arr)
    }));
  }, []);
};

export var values = function(obj) {
  return o2a(obj, identity, concat);
};

export var valuesIf = function(obj, pred) {
  return o2a(obj, (v, ...args) => {
    return pred(v, ...args) ? v : [];
  }, concat, [obj => {
    return obj.rst;
  }]);
};

// todo think over
var groupBy2 = function(obj, names) {
  var [first, second] = names;
  return o2a(obj, identity, concat, [
    o => {
      if (o.i % 2 === 0) {
        return {[first]: o.rst};
      } else {
        o.carry[o.carry.length - 1][second] = o.rst;
        return [];
      }
    }
  ]);
};

export var entry = (obj, names = ['key', 'value']) => {
  var [keyProp, valueProp] = names;
  return o2a(obj, (v, k) => ({[keyProp]: k, [valueProp]: v}), concat);
};

export var pair = (obj) => {
  return o2a(obj, (v, k) => [[k, v]], concat);
};
