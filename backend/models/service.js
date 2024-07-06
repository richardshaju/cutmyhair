import mongoose from "mongoose";

const saloonSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("saloon", saloonSchema);
