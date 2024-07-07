import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  data: {type:mongoose.Schema.Types.Mixed},
});

const saloonSchema = mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  services: [serviceSchema],
  reservation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reservation' }],
});

export default mongoose.model("saloon", saloonSchema);
