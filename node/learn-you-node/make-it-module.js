const filter = require('./mymodule');

const dirPath = process.argv[2];
const ext = process.argv[3];

filter(dirPath, ext, (err, data) => {
    if (err) console.error(err);
    data.forEach(item => console.log(item))
})