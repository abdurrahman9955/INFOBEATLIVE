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
              size= {16}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else if (i - 0.5 === rating ){
            stars.push(
              <FaStarHalf
              key={i}
              color="blue"
              size={16}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else {
            stars.push(
              <FaStar 
              key={i}
              color="white"
              size={16}
              onClick={() => handleRatingChange(i)}
              />
            );
          }

          }
         
          return stars;

          } ; 

     return (
       <div className='flex justify-center min-h-screen pt-5 bg-lime-500 border-2 border-red-950 '>
        <div className=' items-center   text-yellow-950  text-xl max-md:text-lg
         '>
          </div>
           <div className='flex flex-col mt-5 gap-2 w-full
           lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2
            '>
              
            <div className='flex justify-center text-xl items-center text-slate-950 
            font-bold 
            max-lg:text-lg'>
             <h1 className=' ml-5 
             '> Add your review here </h1>
            </div>
         
            <label className=' text-sm font-bold pl-5  text-left mt-6 text-slate-950
            '>write your name here</label>
            <input type='text' className='flex justify-center border border-slate-950
             p-1 text-sm 
             h-8' />

            <label className=' text-sm font-bold pl-5 mt-6 text-slate-950
            '>write your topic/reason here</label>
            <textarea className='flex justify-center border border-slate-950 p-1 text-sm
             h-12  ' />

            <label className='  text-sm font-bold  mt-6 pl-5 text-slate-950
            '>write your review here</label>
            <textarea className='flex justify-center border border-slate-950
             h-64 mb-5  p-1 text-sm
               ' />

             <h1 className=' text-xs p-1   border-2  border-slate-950 font-bold
              text-red-950 max-sm:text-xs'>
                give this class your rating here </h1>
                <div className='flex flex-row  gap-2 pl-2'>
             {renderStars()}
             </div>
             <p className=' text-sm p-1  border-2 border-slate-950 font-bold
              text-red-950 max-sm:text-sm'>your rating: {rating || 'no rating yet'}</p>
             
             <button type='submit' className='flex justify-center text-xs text-slate-50 
             mt-5 mb-20   bg-slate-950 pt-2  hover:bg-amber-950  rounded-full h-8 font-bold
            '>send your feedback</button>
        </div>
    
    </div>
  )
}


export default Review