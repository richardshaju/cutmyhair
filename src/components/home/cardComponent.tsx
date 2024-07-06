"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./home.css";
import { MapPin } from "lucide-react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const CardComponent = () => {
  const [salons, setSalons] = useState<{ image: string; name: string; location: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://cutmyhair.onrender.com/saloon/getSaloons")
      .then((response) => {
        console.log(response.data);
        setSalons(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching saloons:", error);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="p-6 flex gap-8">
        {salons.length>0 ? (salons.map((card, index): any => (
          <div key={index} className="card-component">
            <div className="image-container">
            <Image
                src={card.image?card.image:'/img/image19.png'}
                alt="Image of a saloon"
                width={120}
                height={150}
                layout="responsive"
              />
            </div>
            <div className="bg-black text-white text-center pt-8 card-content flex flex-col pb-10">
              <h1 className="saloon-heading text-xl">{card?.name}</h1>
              <div className="flex gap-3 justify-center">
                <MapPin />
                <p className="saloon-address">{card?.location}</p>
              </div>
            </div>
          </div>
        ))):(
          <div className="flex gap-6">
            <div>
            <Skeleton className="w-[300px] h-[20px] rounded-full mb-3"/>
            <Skeleton className="w-[70px] h-[70px] rounded-full mb-3"/>
            <Skeleton className="w-[300px] h-[100px] rounded-xl mb-3"/>
            </div>
            <div>
            <Skeleton className="w-[300px] h-[20px] rounded-full mb-3"/>
            <Skeleton className="w-[70px] h-[70px] rounded-full mb-3"/>
            <Skeleton className="w-[300px] h-[100px] rounded-xl mb-3"/>
            </div>
            <div>
            <Skeleton className="w-[300px] h-[20px] rounded-full mb-3"/>
            <Skeleton className="w-[70px] h-[70px] rounded-full mb-3"/>
            <Skeleton className="w-[300px] h-[100px] rounded-xl mb-3"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardComponent;
