'use strict';

// input /, /faq, /about
// output => active or blank
module.exports = function setActive(currentPath, expectedPath) {
  if (currentPath === expectedPath) {
    return 'active';
  }
};
