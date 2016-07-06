var fs = require("fs");

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var listFiles = function(path) {
    try {
        fs.accessSync(path, fs.F_OK);
        return fs.readdirSync(path).toString().replaceAll(",", "    ");
    } catch (e) {
        return false;
    }
};

exports.listFiles = listFiles;
