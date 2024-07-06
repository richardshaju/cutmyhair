"use client";

import React, { useState } from "react";
import "./login.css";
import axios from "axios";

function LoginPage() {
  const [saloon, setSaloon] = useState({
    name: "",
    phone: "",
    password: "",
    bio: "",
    location: "",
    image:"",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setSaloon((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(saloon); // Log the user state
    try {
      const response = await axios.post(
        "https://cutmyhair.onrender.com/saloon/signin",
        {
          name: saloon.name,
          password: saloon.password,
          phone: saloon.phone,
          bio: saloon.bio,
          location: saloon.location,
          image: saloon.image,
        }
      );
      localStorage.setItem("token", response.data);

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex justify-end h-screen bg-black main-container-2">
      <div className="flex justify-center align-middle rounded-xl">
        <form
          className="flex flex-col justify-center p-8 formElement"
          onSubmit={handleSubmit}
        >
          <div className="bg-white p-8 rounded-xl mb-6">
            <div className="mb-5">
              <p className="text-blue-600 font-semibold text-sm">
                Welcome to Cut My Hair
              </p>
              <h1 className="font-bold text-3xl mb-2">Login</h1>
              <p className="text-sm">
                Enter your credentials to login for using the dashboard
              </p>
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="name" className="text-sm">
                Saloon Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm"
                placeholder="My saloon"
                value={saloon.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="bio" className="text-sm">
                Bio
              </label>
              <input
                name="bio"
                id="bio"
                className="rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm"
                value={saloon.bio}
                placeholder="We are the bset...."
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="phone" className="text-sm">
                Mobile Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm"
                placeholder="98745215235"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm"
                placeholder="********"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
