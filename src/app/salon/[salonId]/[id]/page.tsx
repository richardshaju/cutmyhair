"use client";
import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { usePathname } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState<Date[]>([]);
  const pathname = usePathname();


  const getIdFromUrl = (url: any) => {
    const pathSegments = url.split("/");
    return pathSegments;
  };
  const id = getIdFromUrl(pathname);      

  console.log(id[id.length - 1], id[id.length - 2]);
  
  const body = {
    saloonId: id[id.length - 2],
    serviceId: id[id.length - 1]     
  };

  fetch(`http://localhost:8000/saloon/getParticularService`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(async (data) => {
      const res = await data.json();          
      if (res.ok) {
        console.log(res);
        
        return;
      } else {
        
      }
    })
    .catch((error) => {
      console.error(error);
    });

     const bookings = [
      { date: '2024-07-10', time: '10:00' },
      { date: '2024-07-10', time: '14:00' },
      // Add more bookings as needed
    ];

    const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };


  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const isTimeBooked = (date, time) => {
    return bookings.some(
      (booking) =>
        booking.date === date.toISOString().split('T')[0] &&
        booking.time === time
    );
  };

  const availableTimes = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

    


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

  const formatTime = (date: Date) => {
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
      <div>
      <h2>Book a Time Slot</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
      />
      {selectedDate && (
        <div>
          <label htmlFor="time">Select Time:</label>
          <select id="time" value={selectedTime} onChange={handleTimeChange}>
            <option value="">--Select a time--</option>
            {availableTimes.map((time) => (
              <option key={time} value={time} disabled={isTimeBooked(selectedDate, time)}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
    </div>
  );
};

export default TimeSlots;
