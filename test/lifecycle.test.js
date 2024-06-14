/* eslint-disable eol-last */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable quotes */
var sails = require("sails");

before(function (done) {
  this.timeout(25000);

  sails.lift(
    {
      hooks: { grunt: false, csrf: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }

      return done();
    }
  );
});

after(function (done) {
  sails.lower(done);
});