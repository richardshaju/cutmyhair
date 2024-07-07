import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import saloon from "../models/saloon.js";
import reservation from "../models/reservation.js";
import mongoose from "mongoose";

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
    res.status(200).json({ token, response, ok: true, saloon: true });
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
    if (password != existingUser.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { phone: existingUser.phone, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ existingUser, token, ok: true, isSaloon: true });
  } catch (error) {
    // Log any errors for debugging
    console.log("Error during login: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const addService = async (req, res) => {
  try {
    const { _id, services } = req.body;

    // Debug: Log the request body
    console.log('Request body:', req.body);

    // Ensure _id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: 'Invalid saloon ID' });
    }

    // Ensure services is an object and has the necessary fields
    if (typeof services !== 'object' || services === null) {
      return res.status(400).json({ message: 'Services should be a valid object' });
    }

    // Create a new service object based on the serviceSchema
    const newService = {
      _id: new mongoose.Types.ObjectId(),
      data: services,
    };

    // Debug: Log the new service object
    console.log('New Service Object:', newService);

    const response = await saloon.findByIdAndUpdate(
      _id,
      { $push: { services: newService } },
      { new: true, runValidators: true }
    );

    if (!response) {
      return res.status(404).json({ message: 'Saloon not found' });
    }

    // Debug: Log the updated saloon
    console.log('Updated saloon:', response);

    res.status(200).json({response, ok:true});
  } catch (error) {
    // Debug: Log the error
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const bookReservation = async (req, res) => {
  try {
    const response = await reservation.create({
      ...req.body,
    });

    res.status(200).json({ msg: "Reservation Successfull", ok:true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getServiceReservation = async (req, res) => {
  try {
    
    const response = await reservation.find({
      serviceId: req.body.serviceId,
    });

    res.status(200).json({ result: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSaloons = async (req, res) => {
  try {
    const response = await saloon.find({});
    res.status(200).json({ result: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getServices = async (req, res) => {
  try {
    const {_id} = req.body;
  
    const response = await saloon.findOne({_id:_id});

    res.status(200).json({ result: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getParticularService = async (req, res) => {
  try {
    const {saloonId, serviceId } = req.body;
  
    const response = await saloon.findOne({_id:saloonId});
    const result = response.services.find((service) => service._id == serviceId);

    res.status(200).json({ result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
