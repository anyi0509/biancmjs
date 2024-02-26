import { compose, identity, splats, unsplats} from './util';
import {Identity, map, ap} from './functor';

export default class Bian {
  constructor(obj) {
    this._wrap = obj;
    this._rst = null;
  }

  getValue() {
    if (this._rst) {
      return this._rst;
    }
    return this._wrap;
  }

  toValue() {
    return this._rst;
  }

  call(fn) {
    this._rst = fn.call(this, this.getValue());
    return this;
  }

  /**
   * @functor
   * @param v
   * @returns {Identity}
   */
  static identity(v) {
    return new Identity(v);
  }
};

/**
 * @param f function
 * @param u functor
 * @returns {*} functor
 */
Bian.map = map;
Bian.ap = ap;
Bian.splats = splats;
Bian.unsplats = unsplats;
Bian.compose = compose;
Bian.identity = v => (new Identity(v));
