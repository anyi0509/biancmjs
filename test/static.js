var bian = require('../lib/index');

exports.compose = function(t) {
  t.equal(
    bian.compose(
      function(v) {
        return v + 1;
      }, function(v) {
        return v * 2
      })(2),
    5
  );
  t.done();
};