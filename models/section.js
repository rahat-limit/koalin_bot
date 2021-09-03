const { Schema, model } = require('mongoose')

const Section = new Schema({
    sections_: {
        type: Array,
    },
    section_telegram_id: {
        type: String,
        unique: true,
    },
})

module.exports = model('Section', Section)