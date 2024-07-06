'use client';

import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

function LoginPage() {
  const [user, setUser] = useState({
    name:"",
    phone: "",
    password: "",
    gender:"",
  });

  function handleChange(e:any) {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

 async function handleSubmit(e:any) {
    e.preventDefault();
    console.log(user); // Log the user state
      try {
        const response = await axios.post(
          "https://cutmyhair.onrender.com/user/signin",
          {
          name: user.name,
            password: user.password,
            phone: user.phone,
            gender: user.gender
          }
        );
        localStorage.setItem('data', response.data);
        
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
  }

  return (
    <div className="flex justify-end h-screen bg-black main-container">
      <div className="flex justify-center align-middle rounded-xl">
        <form className='flex flex-col justify-center p-8 formElement' onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-xl mb-6">
            <div className="mb-5">
              <p className='text-blue-600 font-semibold text-sm'>Welcome to Cut My Hair</p>
              <h1 className="font-bold text-3xl mb-2">Login</h1>
              <p className='text-sm'>Enter your credentials to login for using the dashboard</p>
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="name" className='text-sm'>Name</label>
              <input 
                type="text" 
                name='name' 
                id='name' 
                className='rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm' 
                placeholder='John Doe'
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="gender" className='text-sm'>Gender</label>
              <select  
                name='gender' 
                id='gender' 
                className='rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm' 
                value={user.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="phone" className='text-sm'>Mobile Number</label>
              <input 
                type="text" 
                name='phone' 
                id='phone' 
                className='rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm' 
                placeholder='98745215235'
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label htmlFor="password" className='text-sm'>Password</label>
              <input 
                type="password" 
                name='password' 
                id='password' 
                className='rounded bg-neutral-100 shadow-md h-10 pl-2 text-sm' 
                placeholder='********'
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-white py-3 px-5 rounded-xl flex justify-between items-center">
            <a href='/login' className='text-sm cursor-pointer'>Already have an Account?</a>
            <button type='submit' className='border rounded-lg px-8 py-2'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
