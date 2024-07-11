'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaStar, FaStarHalf } from 'react-icons/fa'; 

const Feedback = () => {
    const [rating, setRating] = useState(0);

    const  handleRatingChange = (newRating:any) => {
        if (newRating === rating ){
          setRating(0);

        } else {
          setRating(newRating);
        } };

        const renderStars = () => {
          const stars = [];

        for (let i = 1; i <= 5; i++) {
          if (i <= rating ) {
            stars.push(
              <FaStar
              key={i}
              color="gold"
              size= {18}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else if (i - 0.5 === rating ){
            stars.push(
              <FaStarHalf
              key={i}
              color="gold"
              size={18}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else {
            stars.push(
              <FaStar 
              key={i}
              color="white"
              size={18}
              onClick={() => handleRatingChange(i)}
              />
            );
          }

          }
         
          return stars;  } ; 

     return (
       <div className='flex justify-center min-h-screen  bg-green-500 border-2 border-purple-950 '>
        <div className=' items-center   text-yellow-950  text-lg max-md:text-lg
         max-sm:text-sm'>
          </div>
           <div className='flex flex-col mt-5 gap-2 max-lg:w-3/5 lg:w-2/5 
            max-md:w-full m-2
            '>
             
            <div className='flex justify-center text-xl items-center text-yellow-950 
            font-bold  max-lg:text-lg'>
             <h1 className=' ml-5 mb-2
             '>send us your feedback/advice here </h1>
            </div>
            <div className='flex justify-center text-sm font-bold' >
                <h1>note: you can write your feedback tips/advice here
                    we will really appreciate it, but if you need
                    to contact us directly for some reason you can switch to the 
                    <Link href={{pathname:'/Contact'}}><span className='
                    text-blue-900 text-xl font-bold'> Contact us page
                         </span></Link> thank your for your participating
                    and your feedback.</h1>
            </div>

            <label className=' text-sm font-bold pl-2 text-left mt-3 bg-white 
             border-2  border-indigo-950
            '>write your name here</label>
            <textarea className='flex justify-center h-8 border-2 border-black px-1
            ' />

            <label className=' text-sm font-bold pl-2 mt-2 bg-white border-2 border-indigo-950
            '>write your topic/reason here</label>
            <textarea className='flex justify-center border-2 border-black px-1
             ' />

            <label className='  text-sm font-bold bg-white border-2 mt-2 pl-2
             border-indigo-950 
            '>write your feedback/advice here</label>
            <textarea className='flex justify-center border-2 border-black h-48 mb-3 px-1
              ' />

             <h1 className=' text-lg p-1  bg-white border-2  border-indigo-950 font-bold max-sm:text-sm'>
                give us your rating here </h1>
                <div className='flex flex-row py-1 gap-4 pl-2'>
             {renderStars()}
             </div>
             <p className=' text-lg p-1  bg-white border-2  border-indigo-950 font-bold 
             max-sm:text-sm'>your rating: {rating || 'no rating yet'}</p>
             
             <button type='submit' className='flex justify-center text-sm text-slate-50 
             mt-5 mb-20  bg-black   hover:bg-green-950  rounded-full py-1 font-bold
            '>send your feedback</button>
        </div>
    
    </div>
  )
}


export default Feedback