import Bian from './bian';
import {get, trucy} from './util';
import {head, last, initial, tail, zip, zipWith} from './array';

export default class BianArray extends Bian {
  constructor(obj) {
    super(obj);
  }

  head() {
    return this.call(head);
  }

  last() {
    return this.call(last);
  }

  initial() {
    return this.call(initial);
  }

  tail() {
    return this.call(tail);
  }

  pick(name) {
    return this.call(v => {
      return v.map(get(name));
    });
  }

  unique() {
    return this.call(v => {
      return v.reduce((carry, item) => {
        return carry.indexOf(item) === -1 ? carry.concat(item) : carry;
      }, []);
    });
  }

  uniqueBy(key) {
    return this.call(v => {
      var list = [];
      return v.reduce((rst, item) => {
        if (list.indexOf(item[key]) === -1) {
          list.push(item[key]);
          return rst.concat(item);
        }
        return rst;
      }, []);
    });
  }

  compact() {
    return this.call(v => {
      return v.filter(trucy);
    });
  }

  chunk(size) {
    size = Math.max(size, 1);
    var rst = [];
    return this.call(v => {
      var length = v.length;
      for (var i = 0; i < length; i = i + size) {
        rst = rst.concat([v.slice(i, i + size)]);
      }
      return rst;
    });
  }

  zip() {
    return this.call(v => zip(v));
  }

  zipWith(fn) {
    return this.call(v => zipWith(v, fn));
  }
};
