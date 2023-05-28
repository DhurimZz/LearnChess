const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be empty'],
        validate: {
            validator: function (v) {
                return /^\S+@\S+\.\S+$/.test(v)
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    message: {
        type: String,
        required: [true, 'Message cannot be empty']
    }
})

module.exports = mongoose.models.ContactUs || mongoose.model('ContactUs', contactUsSchema)
