"use client"

import { useStaticPicker } from "@mui/x-date-pickers/internals";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Page = () => {
  interface User {
    _id: string;
    // Add other properties if needed
  }
  
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const response = JSON.parse(
      typeof localStorage !== "undefined"
        ? localStorage.getItem("response") || "{}"
        : "{}"
    );

    setUser(response.result);
  }, []);

  useEffect(() => {
    if (!user?._id) return;

    const body = { _id: user._id };

    fetch(`http://localhost:8000/user/getBookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (data) => {
        const res = await data.json();       
        console.log(res.response);
           
        setData(res.response);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [user]);
    
  console.log(data);
  

  return (
    <div>
      <h1 className="text-4xl text-center">Your Bookings</h1>
      <div className="p-14">
        <div>
          {data ? (
            data?.map((booking: any) => (
              <div key={booking._id} className="flex justify-between p-4">
                <div>
                  <h2>Saloon ID : {booking.saloonId}</h2>
                  <p>ServiceID : {booking.serviceId}</p>
                  <p>Date: {booking.date}</p>
                  <p>Time: {booking.time}</p>
                </div>
                <div>
                  {!booking.isAttended ? <span className="text-blue-700">Completed</span> :
                  <span className="text-green-700">Booked</span> 
}
                </div>
              </div>
            ))
          ) : (
            <p>No bookings found</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
