const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];

fs.readdir(path.resolve(__dirname, dirPath), (err, data) => {
    if (err) return console.error(err);
    const result = data.filter(item => item.endsWith('.md'));
    // console.log(result);
    result.forEach(item => console.log(item));
})


// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })          