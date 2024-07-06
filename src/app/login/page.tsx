"use client";

import React, { useState } from "react";
import "./login.css";
import { Scissors } from "lucide-react";
import { User } from 'lucide-react';
import axios from "axios";

function LoginPage() {
  const [isSaloon, setIsSaloon] = useState(false);
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(user); // Log the user state
    try {
      const response =  await axios.post(isSaloon?  "http://localhost:5000/saloon/login"
        :
        // "https://cutmyhair.onrender.com/user/login",
        "http://localhost:5000/user/login",
        {
          password: user.password,
          phone: user.phone,
        }
      );
      localStorage.setItem("token", response.data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      {!isSaloon ? (
        <div className="flex justify-end h-screen main-container">
          <div className="flex justify-center align-middle rounded-xl">
            <form
              className="flex flex-col justify-center p-8 formElement"
              onSubmit={handleSubmit}
            >
              <div className="bg-white p-8 rounded-xl mb-6">
                <div className="mb-5">
                  <p className="text-blue-600 font-semibold text-sm">
                    Welcome back!
                  </p>
                  <h1 className="font-bold text-3xl mb-2">Login</h1>
                  <p className="text-sm">
                    Enter your credentials to login for expolre Cut My Hair.
                  </p>
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
              <div className="bg-white py-3 px-5 rounded-xl flex justify-between items-center">
                <a href="/signup" className="text-sm cursor-pointer">
                  Create an account
                </a>
                <button type="submit" className="border rounded-lg px-8 py-2">
                  Login
                </button>
              </div>

              <div className="bg-[#f3e2e2] hover:bg-white py-3 px-5 rounded-xl flex  justify-between items-center absolute bottom-8">
                <a
                  onClick={() => setIsSaloon(true)}
                  className="text-sm cursor-pointer flex gap-2 items-center"
                >
                  Login as Saloon
                  <Scissors size={15} />
                </a>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-end h-screen main-container-2">
          <div className="flex justify-center align-middle rounded-xl">
            <form
              className="flex flex-col justify-center p-8 formElement"
              onSubmit={handleSubmit}
            >
              <div className="bg-white p-8 rounded-xl mb-6">
                <div className="mb-5">
                  <p className="text-blue-600 font-semibold text-sm">
                    Welcome back Boss!
                  </p>
                  <h1 className="font-bold text-3xl mb-2">Login</h1>
                  <p className="text-sm">
                    Enter your credentials to login for using the dashboard
                  </p>
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
              <div className="bg-white py-3 px-5 rounded-xl flex justify-between items-center">
                <a href="/saloonSignup" className="text-sm cursor-pointer">
                  Create a saloon account
                </a>
                <button type="submit" className="border rounded-lg px-8 py-2">
                  Login
                </button>
              </div>

              <div className="bg-[#f3e2e2] hover:bg-white py-3 px-5 rounded-xl flex  justify-between items-center absolute bottom-8">
                <a
                  onClick={() => setIsSaloon(!isSaloon)}
                  className="text-sm cursor-pointer flex gap-2 items-center"
                >
                  Login as user
                  <User size={15} />
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
