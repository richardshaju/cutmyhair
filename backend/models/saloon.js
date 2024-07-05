import mongoose from "mongoose";

const saloonSchema = mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
});

export default mongoose.model("saloon", saloonSchema);
