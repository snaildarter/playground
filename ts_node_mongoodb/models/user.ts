import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    user: {type: String, required: true, max: 100},
    pwd: {type: String, required: true, max: 100},
    date: {type: Date}
});

AuthorSchema
  .virtual('name')
  .get(function (this: any) {
    return this.family_name + ', ' + this.first_name;
  });


export default mongoose.model('users', AuthorSchema);