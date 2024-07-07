import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  salonId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: String, required: true },
  services: {type: mongoose.Schema.Types.Mixed},
  isAttended: { type: String, default: false },
});

export default mongoose.model("reservation", reservationSchema);