require("babel-polyfill");
var code = require.context('.', true, /\_spec.js$/);
var copmonents = require.context('.', true, /\.jsx$/);
code.keys().forEach(code);
copmonents.keys().forEach(copmonents);
