import {curry} from 'lodash';

export var map = curry((f, u) => u.map(f));
export var ap = curry((a, b) => a.ap(b));

export var ctor = f => {
  var c = (...args) => {
    if (!(this instanceof c)) {
      var instance = new c();
      f.apply(instance, args);
      return instance;
    }
    f.apply(this, args);
  };

  return c;
};

export class Identity {
  constructor(v) {
    this.v = v;
  }
  map(f) {
    return new Identity(f(this.v));
  }
}

export var Sum = ctor(function(v) {
  this.v = v;
});

Sum.prototype.ap = b => {
  return new Sum(this.v + b.v);
};


