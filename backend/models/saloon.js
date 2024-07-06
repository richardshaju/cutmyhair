import mongoose from "mongoose";

const saloonSchema = mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  services: [{ type: Map, of: mongoose.Schema.Types.Mixed }],
  reservation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reservation' }],
});

export default mongoose.model("saloon", saloonSchema);
