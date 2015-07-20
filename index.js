"use strict";

const util = require("util");

module.exports = function() {
  return {
    run: function(data) {
      console.log(util.inspect(data, false, null));
    }
  };
}
