import React from "react"
import Image from "next/image"
import './home.css'
import { MapPin } from 'lucide-react';

const CardComponent = () => {

    const cards = [
        {
          src: "/img/image19.png",
          alt: "MARLON MCDONALD",
          heading: "MARLON MCDONALD",
          address: "Address"
        },
        {
          src: "/img/image19.png",
          alt: "MARLON MCDONALD",
          heading: "MARLON MCDONALD",
          address: "Address"
        },
        {
          src: "/img/image19.png",
          alt: "MARLON MCDONALD",
          heading: "MARLON MCDONALD",
          address: "Address"
        }]

  return (
        <div className="w-full flex justify-center">
            <div className="p-6 flex gap-8">
        {cards.map((card, index) => (
        <div key={index} className="card-component">
          <div className="image-container">
            <Image 
              src={card.src} 
              alt={card.alt} 
              width={100} 
              height={100} 
              layout="responsive" 
            />
          </div>
          <div className="bg-black text-white text-center p-8 card-content flex justify-between flex-col">
            <h1 className="saloon-heading text-xl">{card.heading}</h1>
            <div className="flex gap-3 justify-center">
            <MapPin />
            <p className="saloon-address">{card.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
  )
}
export default CardComponent