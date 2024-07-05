'use client';

import React, { useState } from 'react';
import './login.css';

function LoginPage() {
  const [user, setUser] = useState({
    phone: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user); // Log the user state
  }

  return (
    <div className="flex justify-end h-screen">
      <div className="flex justify-center align-middle rounded-xl">
        <form className='flex flex-col justify-center p-8 formElement' onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-xl mb-6">
            <div className="mb-5">
              <p className='text-blue-600 font-semibold text-sm'>Welcome back!</p>
              <h1 className="font-bold text-3xl mb-2">Login</h1>
              <p className='text-sm'>Enter your credentials to login for using the dashboard</p>
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
            <p className='text-sm cursor-pointer'>Create an account</p>
            <button type='submit' className='border rounded-lg px-8 py-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
