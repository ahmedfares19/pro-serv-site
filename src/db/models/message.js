const mongoose = require("mongoose");

const messageSchma = mongoose.Schema(
  {
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message :{type:String},
    senderType:{type:String}
  },
  {
    timestamps: true,
  }
);

const message = mongoose.model('message',messageSchma);
module.exports = message;