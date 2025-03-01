const { Schema } = require("mongoose");

const City = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = City;
