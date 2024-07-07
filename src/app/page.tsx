"use client"

import Dashboard from "@/components/dashboard/dashboard";
import UserHome from "@/components/home/userHome";
import LandingPage from "@/components/LandingPage/LandingPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [saloon, setSaloon] = useState(null);

  useEffect(() => {
    const response = JSON.parse(
      typeof localStorage !== "undefined"
        ? localStorage.getItem("response") || "{}"
        : "{}"
    );

    setUser(response.user);
    setSaloon(response.isSaloon);

  }, []);
    

  return (
    <>
      {user && <UserHome />}

      {saloon && <Dashboard />}

      {!user && !saloon && <LandingPage />}
    </>
  );
}
