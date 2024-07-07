import Image from "next/image"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const UserBooking = (props:any) => {
  return (
    <div className="my-16">
        <div className="flex flex-col justify-center items-center serviceHeader">
          <h1 className='font-bold text-[56px] mb-4'>User Bookings</h1>
          <p className='text-gray-400 text-[20px]'>Book smarter, not harder</p>
        </div>
        <div className="flex justify-center align-middle">
        <div className="timeslots w-[1000px] flex justify-between gap-4 border py-2 px-4 rounded-lg">
            <div className="flex ">
                <Image src={'/img/image19.png'} height={150} width={100} alt="service heading"/>
            </div>
            <div className="flex flex-col justify-around w-full px-4 gap-4">
                <h1 className="text-[24px]">Saloon Name</h1>
                <p  className="text-[16px]">Services Needed</p>
            </div>
            <div className="flex flex-col justify-around px-4 gap-4">
                <p className="text-center">09.00</p>
                <button className="py-2 px-4 border bg-red-600 text-white hover:bg-red-500 rounded">Cancel</button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default UserBooking