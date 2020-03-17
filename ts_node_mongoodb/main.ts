// import fs from "fs";
import mongoose from "mongoose";
// import Auther from './models/author'
import User from './models/user'

// const user = new User({user: 'Ben', pwd: '456', date: new Date()})
// user.save((err, result) => {
//     if (err) console.log(err);
//     console.log(result);
// })
// User.find({user: 'Ben'}, (err, data) => {
//     // console.log(err, data)
//     data.forEach(item => console.log(item));
// });

User.deleteOne({_id: '5e68b276c47e2a1bd8ef33af'}, (err: any) => {
    if (err) console.log(err);
    console.log('ok');
});


mongoose.connect('mongodb://localhost/msg', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
