'use client'
import React, { useState }  from "react"
import Link from "next/link"
import Select3 from "@/app/components0/Select/Select3"




const CreateBootCamp = () => {

  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-lime-500 border-2 border-black 
     '>

      <div className="flex justify-center   text-xl text-white font-normal"> 
      <p className=" bg-lime-950 rounded-lg p-2 px-10  ">crate your bootCamp here </p></div>

      <div className="flex justify-center text-sm text-black font-bold mt-5 mb-5 ">
      <h1 className="border-2 border-black rounded-xl 
       p-2 lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-auto  mt-5 ">
        Bootcamp: A bootcamp focuses on a single field, such as web development, offering
         three structured classes: Beginner, Intermediate, and Advanced. This format 
         provides intensive training in one area, allowing you to guide learners from 
         foundational to advanced skills. Each class is designed to build on the previous 
         one, ensuring a comprehensive learning experience in your chosen field.
      </h1>
     </div>


        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
          border-2 border-slate-950   bg-white rounded-lg'
          placeholder='your bootCamp name'  />
        </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm   bg-white rounded-lg
           '
         placeholder='purpose of your bootCamp'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
          border-2 border-slate-950   bg-white rounded-lg'
          placeholder='your country'  />
        </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm   bg-white rounded-lg
           '
         placeholder='language which you will teach in'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-40 p-1 mt-5
           border-2 border-slate-950 text-sm     bg-white rounded-xl
          '
         placeholder='rules of your bootCamp '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm      bg-white rounded-xl
          '
         placeholder='write the description about your bootCamp '  />
      </div>
       
      <Link href={{pathname:'/bootCamp'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-5'>validate bootCamp</button>
      </div></Link>
     
      <Link href={{pathname:'/bootCamp'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create bootCamp
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default CreateBootCamp