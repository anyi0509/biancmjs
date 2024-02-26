import {concat, identity, splats, unsplats} from './util';

var reduce = (arr, convert, connect, initial = []) => {
  return arr.reduce((carry, ...args) => {
    return connect(carry, convert(...args, carry));
  }, initial);
};

export var fill = (n, v) => Array.apply(null, Array(n)).map(() => v);

export var last = arr => arr[Math.max(arr.length - 1, 0)];

export var head = arr => arr[0];

export var initial = arr => {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(0, arr.length - 1);
};

export var tail = arr => {
  return arr.length <= 1 ? [] : arr.slice(1);
};

export var maxDim = arrs => {
  return reduce(arrs, arr => arr.length, Math.max, 0);
};

export var zip = (arrs, fn = identity) => {
  return reduce(fill(maxDim(arrs)), (v, i) => ([fn(arrs.map(arr => arr[i]))]), concat);
};

export var zipWith = (arrs, fn) => zip(arrs, fn);

var branch = (valueFn, decideFn, leftFn, rightFn) => (v) => {
  var value = valueFn(v);
  return (decideFn(value) === true) ? leftFn(value) : rightFn(value);
};

export var group = (arr, key) => {
  return reduce(
    arr,
    o => ({k: o[key], v: o}),
    unsplats(branch(
      ([obj, {k, v}]) => ({obj, k, v}),
      ({obj, k}) => typeof obj[k] !== 'undefined',
      ({obj, k, v}) => {
        obj[k].items.push(v);
        return obj;
      },
      ({obj, k, v}) => {
        obj[k] = {items: [v]};
        return obj;
      }
    )),
    {});
};

export var countBy = (arr, key = 'id') => {
  return arr.reduce((carry, item) => {
    var prop = item[key];
    if (carry[prop]) {
      carry[prop]++;
    } else {
      carry[prop] = 1;
    }
    return carry;
  }, {});
};

