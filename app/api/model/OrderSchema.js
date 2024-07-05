import mongoose from "mongoose";
let validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Items = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productdatas",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

const OrderData = new mongoose.Schema(
  {
    productToken: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userpersonaldatas",
      required: true,
    },
    email: {
      type: String,
      require: true,
      index: true,
      trim: true,
      lowercase: true,
      
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    paymentmode: {
      type: String,
      required: true,
    },
    amountreceived: {
      type: Number,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },
    orderstatus: {
      type: String,
      default: "pending",
    },
    specialInstruction: {
      type: String,
    },
    Items: [Items],
  },
  { timestamps: true }
);
mongoose.models = {};

const orderData =
  mongoose.models.orderData || mongoose.model("orderData", OrderData);
export default orderData;
