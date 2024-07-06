import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  salonId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: String, required: true },
  isAttended: { type: String, default: false },

//   password: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],
});

export default mongoose.model("reservation", reservationSchema);