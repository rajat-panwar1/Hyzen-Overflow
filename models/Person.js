const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  profilepic: {
    type: String,
    default:
      "https://www.pngfind.com/pngs/m/534-5348654_heisenberg-drawing-breaking-bad-breaking-bad-art-heisenberg.png",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Person = mongoose.model("myPerson", PersonSchema);
