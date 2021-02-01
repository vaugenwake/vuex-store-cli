/**
 * Create a new directory at path in file system
 */

const fs = require('fs');

module.exports = function(path, dir_name) {
    if(!fs.existsSync(path + '/' + dir_name)) {
        fs.mkdirSync(path + '/' + dir_name);
    }
}