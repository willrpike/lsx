#!/usr/bin/env node

var lib = require('../lib/index.js');

var loop = Number(process.argv.slice(2)[0]);
var path = process.argv.slice(2)[1];
if (typeof path === 'undefined') {
    path = ".";
}
console.log(path);
var listFiles = lib.listFiles(path);
if (isNaN(loop)) {
    console.log("Enter a Number");
    return;
}
if (!listFiles) {
    console.log("Path does not exist");
    return;
}
for (var i = 0; i < loop; i++) {
    console.log(listFiles);
}
return;
