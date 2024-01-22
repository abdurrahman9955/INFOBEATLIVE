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
        }

    };

        const renderStars = () => {
          const stars = [];

        


        for (let i = 1; i <= 5; i++) {
          if (i <= rating ) {
            stars.push(
              <FaStar
              key={i}
              color="gold"
              size= {24}
              onClick={() => handleRatingChange(i - 0.5)}
              />
            );
          } else if (i - 0.5 === rating ){
            stars.push(
              <FaStarHalf
              key={i}
              color="gold"
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
       <div className='flex justify-center  pt-28 bg-green-500 border-8 border-purple-950 '>
        <div className=' items-center   text-yellow-950  text-5xl max-md:text-2xl max-sm:text-xl'>
          </div>
           <div className='flex flex-col mt-20 gap-2 max-lg:w-3/5 lg:w-2/5 
            max-md:w-5/6
            '>
              
            <div className='flex justify-center text-5xl items-center text-yellow-950 font-bold 
            max-md:text-3xl'>
             <h1 className='text-text-4xl ml-5 mb-10
             '>send us your feedback/advice here </h1>
            </div>
            <div className='flex justify-center text-2xl font-bold' >
                <h1>note: you can write your feedback tips/advice here
                    we will really appreciate it, but if you need
                    to contact us directly for some reason you can switch to the 
                    <Link href={{pathname:'/Contact'}}><span className='
                    text-blue-900 text-3xl font-bold'> Contact us page
                         </span></Link> thank your for your participating
                    and your feedback.</h1>
            </div>

            <label className=' text-xl font-bold pl-5 text-left mt-6 bg-white 
             border-4  border-indigo-950
            '>write your name here</label>
            <textarea className='flex justify-center border-4 border-black 
            ' />

            <label className=' text-xl font-bold pl-5 mt-6 bg-white border-4 border-indigo-950
            '>write your topic/reason here</label>
            <textarea className='flex justify-center border-4 border-black 
             ' />

            <label className='  text-xl font-bold bg-white border-4 mt-6 pl-5
             border-indigo-950 
            '>write your feedback/advice here</label>
            <textarea className='flex justify-center border-4 border-black h-64 mb-5
              ' />

             <h1 className=' text-3xl p-2  bg-white border-4  border-indigo-950 font-bold
             max-sm:text-xl'>
                give us your rating here </h1>
                <div className='flex flex-row py-4 gap-4 pl-2'>
             {renderStars()}
             </div>
             <p className=' text-3xl p-2  bg-white border-4  border-indigo-950 font-bold 
             max-sm:text-xl'>your rating: {rating || 'no rating yet'}</p>
             
             <button type='submit' className='flex justify-center text-lg text-slate-50 mt-10 mb-20 
              bg-black   hover:bg-green-950  rounded-full py-2 font-bold
            '>send your feedback</button>
        </div>
    
    </div>
  )
}


export default Feedback