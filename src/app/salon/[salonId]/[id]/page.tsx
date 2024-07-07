"use client";
import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const TimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState<Date[]>([]);
  const [selectedTime, setSelectedTime] = useState<String | undefined>(
    undefined
  );
  const [selectedDate, setSelectedDate] = useState<any>();
  var datevalue: any;
  const toast = useToast();
  const pathname = usePathname();
  const user = JSON.parse(localStorage.getItem("response") || "");
  const d = selectedDate?.$d;
  datevalue = d?.toISOString().split("T")[0];

  const getIdFromUrl = (url: any) => {
    const pathSegments = url.split("/");
    return pathSegments;
  };
  const id = getIdFromUrl(pathname);

  const body = {
    saloonId: id[id.length - 2],
    serviceId: id[id.length - 1],
  };
  useEffect(() => {
    fetch(`http://localhost:8000/saloon/getParticularService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
  });

  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = [];
      for (let hour = 10; hour <= 20; hour++) {
        const time = new Date();
        time.setHours(hour, 0, 0, 0);
        slots.push(new Date(time)); // Create a new Date object to avoid reference issues
      }
      return slots;
    };

    setTimeSlots(generateTimeSlots());
  }, []);

  const formatTime = (date: any) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for AM/PM format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = {
      saloonId: id[id.length - 2],
      userId: user.result?._id,
      date: datevalue,
      time: selectedTime,
      serviceId: id[id.length - 1],
    };

    fetch(`http://localhost:8000/saloon/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (data) => {
        const res = await data.json();
        if (res.ok) {
          toast.toast({ title: "Booking Succesfull", variant: "default" });
          return;
        } else {
          toast.toast({ title: "Server Error", variant: "destructive" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/saloon/getServiceReservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
  });
  return (
    <div className="p-5">
      <div className="text-center mb-5">
        <h1 className="font-bold text-6xl mb-4">Saloons</h1>
        <p className="text-gray-400 text-2xl">Book smarter, not harder</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mt-14 flex-col"
      >
        <div className="flex gap-8 justify-between w-[900px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className="m-0" onChange={setSelectedDate} />
          </LocalizationProvider>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.length > 0 ? (
              timeSlots.map((slot, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedTime(formatTime(slot))}
                  className={` text-black py-2 px-5 border border-black rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white ${
                    selectedTime === formatTime(slot)
                      ? " bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {formatTime(slot)}
                </span>
              ))
            ) : (
              <h1>No data</h1>
            )}
          </div>
        </div>
        <div>
          <p>Time: {selectedTime ? selectedTime.toString() : ""}</p>
          <p>Date:{datevalue ? datevalue : ""}</p>
        </div>
        <button type="submit">BOOK</button>
      </form>
    </div>
  );
};

export default TimeSlots;
