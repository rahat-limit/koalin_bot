const { Schema, model } = require('mongoose')

const Buisness = new Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    phone_number: {
        type: Number,
    },
    buisness_email: {
        type: String,
        unique: true,
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },
    buisness_telegram_id: {
        type: String,
        unique: true,
    },
    structure: {
        type: Object,
        default: {},
    },

})

module.exports = model('Buisness', Buisness)
