import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import saloon from "../models/saloon.js";
import service from '../models/service.js';

export const signin = async (req, res) => {
  try {
    const response = await saloon.create({
      ...req.body,
    });

    const token = jwt.sign(
      { phone: response.phone, id: response._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ token, response, ok: true });
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
      { phone: existingUser.phone, id: existingUser._id },
      "test", 
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token, ok:true });
  } catch (error) {
    // Log any errors for debugging
    console.log("Error during login: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addService = async (req, res) => {
  try {
    const response = await service.create({
      ...req.body,
    });

    await saloon.findOneAndUpdate(
      { _id: req.body.service },
      { $push: { services: response._id } },
      { new: true }
    );

    res.status(200).json({ token, response, ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

