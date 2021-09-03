const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  user_telegram_id: {
    type: String,
    unique: true,
  },
  buisness_acc: {
    type: Object,
  },
  order_cart: {
    type: Array,
    default: [],
  },
});

module.exports = model("User", UserSchema);
