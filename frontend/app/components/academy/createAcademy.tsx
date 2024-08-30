'use client'
import React, { useState }  from "react"
import Link from "next/link"
import Select3 from "@/app/components0/Select/Select3"




const CreateAcademy = () => {

  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-lime-500 border-2 border-black 
     '>

      <div className="flex justify-center   text-xl text-white font-normal"> 
      <p className=" bg-lime-950 rounded-lg p-2 px-10  ">crate your academy here </p></div>

     <div className="flex justify-center text-sm text-black font-bold mt-5 mb-5 ">
      <h1 className="border-2 border-black rounded-xl 
      p-2 lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-auto  mt-5 ">
      An academy is a platform where you can offer a wide range of courses based on your 
      expertise and skills. If you have multiple skills, such as web development, 
      app development, data science, or cybersecurity, you can create separate classes
       for each. Each skill can be divided into beginner, intermediate, and advanced 
       levels, allowing you to create multiple classes tailored to different learning 
       stages. You can also set the price for each course, giving you flexibility in 
       how you offer and monetize your knowledge.
      </h1>
     </div>


        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
          border-2 border-slate-950   bg-white rounded-lg'
          placeholder='your group name'  />
        </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm   bg-white rounded-lg
           '
         placeholder='purpose of your group'  />
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
         placeholder='rules of your group '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm      bg-white rounded-xl
          '
         placeholder='write the description about your group '  />
      </div>
       
      <Link href={{pathname:'/academy'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-5'>validate academy</button>
      </div></Link>
      
      <Link href={{pathname:'/academy'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create academy
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default CreateAcademy