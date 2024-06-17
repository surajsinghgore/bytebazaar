import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const UserData = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'First name must be at least 3 characters long'],
      lowercase: true,
    },
    lname: {
      type: String,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      index: true,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
        type: String,
      }
    
    
  },
  { timestamps: true }
);
mongoose.models = {};

const userPersonalData =
  mongoose.models.UserData || mongoose.model("userPersonalData", UserData);
export default userPersonalData;
