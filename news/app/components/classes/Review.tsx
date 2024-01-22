'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaStar, FaStarHalf } from 'react-icons/fa'; 

const Review = () => {
    const [rating, setRating] = useState(0);

    const  handleRatingChange = (newRating:any) => {
        if (newRating === rating ){
          setRating(0);

        } else {
          setRating(newRating);
        }

    };

        const renderStars = () => {
          const stars = [];

        


        for (let i = 1; i <= 5; i++) {
          if (i <= rating ) {
            stars.push(
              <FaStar
              key={i}
              color="blue"
              size= {24}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else if (i - 0.5 === rating ){
            stars.push(
              <FaStarHalf
              key={i}
              color="blue"
              size={24}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else {
            stars.push(
              <FaStar 
              key={i}
              color="white"
              size={24}
              onClick={() => handleRatingChange(i)}
              />
            );
          }

          }
         
          return stars;

          } ; 

     return (
       <div className='flex justify-center  pt-28 bg-cyan-500 border-8 border-red-950 '>
        <div className=' items-center   text-yellow-950  text-5xl max-md:text-2xl max-sm:text-xl'>
          </div>
           <div className='flex flex-col mt-20 gap-2 
            '>
              
            <div className='flex justify-center text-5xl items-center text-red-950 font-bold 
            max-lg:text-3xl'>
             <h1 className=' ml-5 mb-10
             '>your feedback/advice here </h1>
            </div>
          
            <label className=' text-2xl font-bold pl-5  text-left mt-6 text-red-950
            '>write your name here</label>
            <input type='text' className='flex justify-center border-4 border-red-950 p-2 text-3xl
             h-16' />

            <label className=' text-2xl font-bold pl-5 mt-6 text-red-950
            '>write your topic/reason here</label>
            <textarea className='flex justify-center border-4 border-red-950 p-2 text-2xl
             h-24 ' />

            <label className='  text-2xl font-bold  mt-6 pl-5 text-red-950
            '>write your feedback/advice here</label>
            <textarea className='flex justify-center border-4 border-red-950
             h-64 mb-5  p-2 text-2xl
              ' />

             <h1 className=' text-3xl p-2   border-4  border-red-950 font-bold text-red-950
             max-sm:text-xl'>
                give this class your rating here </h1>
                <div className='flex flex-row py-4 gap-4 pl-2'>
             {renderStars()}
             </div>
             <p className=' text-3xl p-2  border-4  border-red-950 font-bold text-red-950
             max-sm:text-xl'>your rating: {rating || 'no rating yet'}</p>
             
             <button type='submit' className='flex justify-center text-lg text-slate-50 mt-10 mb-20 
              bg-red-950   hover:bg-amber-950  rounded-full py-2 font-bold
            '>send your feedback</button>
        </div>
    
    </div>
  )
}


export default Review