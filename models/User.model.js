const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String },
    username: {
      type: String,
    },
    password: { type: String },
    role: { type: String }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model('User', userSchema);

module.exports = UserModel;
