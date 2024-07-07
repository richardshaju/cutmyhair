"use client";
import React, { useState } from 'react'
const timeSlot=[9,10,11,12]
const page = () => {

const [step,setStep]= useState(1)
const [value,setValue]= useState({ })
  return (
    <div >
   
    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
    <h1>Book Your Date!</h1>
    <div style={{marginInline:'10%',backgroundColor:'red'}}>
        {step ===1 ? 
         < input type="date"
         name='date'
          onChange={(e)=> {
            setStep(2)
            setValue({
                ...value,
                ['date']:e.target.value
             })
             
          }} />
          :
<>
         <div style={{display:'flex',backgroundColor:'grey'}}>
           {timeSlot.map((time)=>(
            <div style={{backgroundColor:'white',padding:'10px'}}>
                {time}
            </div>
           ))}
            {/* <button style={{color:'white',background:'black',display:'block'}}>Book Reservation</button> */}
         </div>
         <button style={{color:'white',background:'black',display:'block'}}>Book Reservation</button>
         </>
          }
  </div>
   </div>
   </div>

  )
}

export default page