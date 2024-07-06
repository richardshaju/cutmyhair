import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  reservation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reservation' }],
});

export default mongoose.model("user", userSchema);
