import mongoose from "mongoose";

const ProductData = new mongoose.Schema(
  {
    name: {
      type: String
   
    },
    image: {
      type: String
    },
    description: {
      type: String
    },

    category: {
      type: String
    },
    price: {
      type: Number
    }
  }
);
mongoose.models = {};

const productData =
  mongoose.models.ProductData || mongoose.model("productData", ProductData);
export default productData;
