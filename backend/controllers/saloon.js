import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import saloon from "../models/saloon.js";
import reservation from '../models/reservation.js';

export const signup = async (req, res) => {
  try {
    const response = await saloon.create({
      ...req.body,
    });

    const token = jwt.sign(
      { phone: response.phone, id: response._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ token, response, ok: true, saloon: true});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const existingUser = await saloon.findOne({ phone });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password !=  existingUser.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { phone: existingUser.phone, id: existingUser._id ,},
      "test", 
      { expiresIn: "1h" }
    );

    res.status(200).json({ existingUser, token, ok:true ,isSaloon:true});
  } catch (error) {
    // Log any errors for debugging
    console.log("Error during login: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addService = async (req, res) => {
  try {

    console.log(req.body,'req.body');
    const response = await saloon.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { services: req.body.services } },
      { new: true }
    );

    res.status(200).json({ token, response, ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const bookReservation= async (req, res) => {
  try {
    const response = await reservation.create({
      ...req.body,
    });

    res.status(200).json({msg:'Reservation Successfull'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const getReservation= async (req, res) => {
  try {
    const response = await reservation.find({
      _id:req.body.id
    });
    console.log(response,'responseeeeeeeee')

    res.status(200).json({result:response});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSaloons = async (req, res) => {
  try {
    const response = await saloon.find({});
    res.status(200).json({result:response});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


