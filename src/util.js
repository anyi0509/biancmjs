import {curry} from 'lodash';

export var concat = (a1, ...arrs) => (Array.isArray(a1) ? a1 : [a1]).concat(...arrs);
export var concat2 = curry((v1, v2) => v1.concat(v2));
export var identity = v => v;
export var compose = (...fns) => v => concat(identity, fns).reduceRight((rst, fn) => fn(rst), v);
export var get = curry((prop, obj) => obj[prop]);
export var trucy = v => !!v;
export var splats = fn => arr => fn(...arr);
export var unsplats = fn => (...args) => fn(args);