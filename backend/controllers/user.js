import user from "../models/user.js";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  console.log(req.body)
  try {
    const response = await user.create({
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
  const {phone, password} = req.body;

  try {
    const existingUser = await user.findOne({ phone });

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