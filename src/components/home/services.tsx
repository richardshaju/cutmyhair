import React from "react"
import Image from "next/image"
import './service.css'

const Services = () => {
    const cardData = [
        {
          id: 1,
          img: '/img/iconFacial.png',
          name: 'FACIAL'
        },
        {
          id: 2,
          img: '/img/iconRazor.png',
          name: 'SHAVES & HAIRCUT'
        },
        {
          id: 3,
          img: '/img/iconHair.png',
          name: 'HAIR STYLING'
        },
        {
          id: 4,
          img: '/img/iconMustache.png',
          name: 'MUSTACHE TRIMMING'
        },
        {
          id: 5,
          img: '/img/iconScissors.png',
          name: 'HAIRCUT & BEARD TRIM'
        },
        {
          id: 6,
          img: '/img/iconBeard.png',
          name: 'FACIAL & SHAVE'
        }
      ]
  return (
    <>
        <div className="serviceContainer">
            <div className="flex flex-col justify-center items-center serviceHeader">
                <h1>Services</h1>
                <p>Book smarter, not harder</p>
            </div>
            <button className="showAllBtn">Check out all</button>
            <div className="service-list">
                {cardData.map((card)=>(
                    <div key={card.id} className="servicecard-component">
                        <div className="serviceImageContainer">
                            <Image src={card.img} 
                                alt={card.name} 
                                width={100} 
                                height={100} 
                                layout="responsive" 
                                />
                        </div>
                        <div className="cardHeading">
                            {card.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
export default Services