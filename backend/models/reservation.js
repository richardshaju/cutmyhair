import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  salonId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  isAttended: { type: String, default: false },
});

export default mongoose.model("reservation", reservationSchema);