const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const developerSchema = new mongoose.Schema(
  {
    name:"String",
    gender:{type:String,
    enum:["male","female","lgbtq"]},
    percentage:Number,
    batch:{type:ObjectId,
    ref:'mybatch'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("developer", developerSchema);
