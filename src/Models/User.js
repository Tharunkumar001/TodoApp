import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    teleId: {
        type: String,
    },
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;