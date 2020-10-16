const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extFile, cb) {
    
    fs.readdir(path.resolve(__dirname, dirName), (err, data) => {
        if (err) return cb(err);
        const result = data.filter(item => item.endsWith('.' + extFile));
        cb(null, result);
    })
}