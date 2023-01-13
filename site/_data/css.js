// CSS is included a data file so it can be compiled and inlined at runtime
// Individual files are also generated by `/site/css.njk`

const { compileSassTargets } = require("../utils/compile-scss");

// Add SCSS compilation targets here
const targets = {
  main: "site/src/scss/main.scss",
  "keystone-comments": "site/src/scss/keystone-comments.scss",
  "keystone-claps": "site/src/scss/keystone-claps.scss",
  "keystone-login": "site/src/scss/keystone-login.scss",
  "keystone-bookmarks": "site/src/scss/keystone-bookmarks.scss",
};

// Create an object with the compiled CSS for each key in targets
module.exports = compileSassTargets(targets);
