import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("service", serviceSchema);


// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const serviceSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   duration: {
//     type: Number,
//     required: true,
//   },
// });

// const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

// export default Service;