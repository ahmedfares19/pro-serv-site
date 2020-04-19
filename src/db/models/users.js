const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true, lowercase: true },
  secondName: { type: String, required: true, trim: true, lowercase: true },
  userType:{type:String, default:"user"},
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate() {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("shouldn't includes 'password'");
      }
    },
  },
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      //to string because it's and id object
      _id: user._id.toString(),
    },
    "thisismytrainingtoken"
  );
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await Users.findOne({
    email,
  });
  if (!user) {
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("unable to login");
  }
  return user;
};

userSchema.pre('save', async function (next) {

    const user = this;
    if (user.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})


const User = mongoose.model('User', userSchema);


module.exports = User;