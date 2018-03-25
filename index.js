'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/main.min.js');
} else {
  module.exports = require('./dist/main.js');
}
