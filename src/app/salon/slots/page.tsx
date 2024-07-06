"use client";
import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const TimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = [];
      for (let hour = 10; hour <= 20; hour++) {
        const time = new Date();
        time.setHours(hour, 0, 0, 0);
        slots.push(time);
      }
      return slots;
    };

    setTimeSlots(generateTimeSlots());
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for AM/PM format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className="p-5">
      <div className="text-center mb-5">
        <h1 className="font-bold text-6xl mb-4">Saloons</h1>
        <p className="text-gray-400 text-2xl">Book smarter, not harder</p>
      </div>
      <div className="flex justify-center mt-14">
        <div className="flex gap-8 justify-between w-[900px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className="m-0" />
          </LocalizationProvider>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.length > 0 ? (
              timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className="bg-white text-black py-2 px-5 border border-black rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  {formatTime(slot)}
                </button>
              ))
            ) : (
              <h1>No data</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlots;
