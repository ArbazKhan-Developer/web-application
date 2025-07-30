const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, 'name must be atleast 2 char'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'provide the email address'],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'provide the proper email address.'],
        lowercase: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: {
        city: {
            type: String,
            require: [true, 'city is required.']
        },
        pincode: {
            type: String,
            required: true,
            match: [/^\d{6}$/, 'picode atleast should be 6 digit']
        }
    }
})

const model = mongoose.model('User', userSchema);

module.exports = model;