const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    closedState:{type:Boolean , default:false}
  },
  {
    timestamps: true,
  }
);


const session = mongoose.model('session',sessionSchema);
module.exports = session;