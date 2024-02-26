import Bian from './BianWrapper';
import bianObject from './BianObject';
import bianArray from './BianArray';

Object.defineProperty(Array.prototype, 'bian', {
  value: function() {
    return new bianArray(this);
  }
});

Object.defineProperty(Object.prototype, 'bian', {
  value: function() {
    return new bianObject(this);
  }
});

export default Bian;
