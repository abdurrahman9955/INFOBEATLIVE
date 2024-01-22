import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'
import History from './Small/History';
import Choose3 from './Choose/Choose3';
import Choose4 from './Choose/Choose4';
import Choose5 from './Choose/Choose5';


const Program = () => {
   const [selectedRoute, setSelectedRoute] = useState<boolean>(false);
  
     const handleClick = ()=>{
   setSelectedRoute(!selectedRoute);
 
 };   

   
  

  return (
    <div className='flex flex-col  py-16 bg-lime-500 border-4 border-black '>
          
          <div  >
            {selectedRoute && (<History />)}
               </div>

        <div className="flex flex-col  ">
        <h1 className="flex justify-center text-3xl text-black font-bold max-sm:text-xl 
        sm:ml-10 max-sm:ml-3 ">
            create your program here </h1>

            <div className='flex justify-center'>
      <button  onClick={handleClick}
      type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-10
       text-slate-50 bg-slate-950
      hover:bg-indigo-950 rounded-xl max-sm:w-3/5 mt-10 text-xl'>view your lectures </button>
      </div>


             <div className='flex justify-center'>
            <h1 className='items-center text-2xl text-black border-4 m-3 border-black h-auto max-w-xl lg:max-w-5xl
           mt-10  font-bold p-3'>
            please create your lecture date and time as well as the issue 
            you want o discourse, this page was create in order for you to create your 
            lecture and settle the meeting about wha you want to discourse and the 
            amount of people among others.

          </h1>
          </div>
         </div>

         <h1 className="flex justify-center text-3xl text-black font-bold max-sm:text-xl 
        sm:ml-10 max-sm:ml-3 ">
            create your new lecture here </h1>

         <div className=' ' >
     
      <div className='flex justify-center'>
      <input type='text'
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-4/5 h-16 mt-5  text-2xl 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-4 border-blue-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
          h-auto  mt-5 font-bold
          border-4 border-blue-950  text-xl bg-white
          '
         >  <Choose3 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto 
          mt-5 font-bold
          border-4 border-blue-950  text-xl bg-white
          '
         >  <Choose4 /> </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-4/5 h-auto mt-5  text-xl 
          text-blue-950 font-bold
       bg-white text-left 
        border-4 border-blue-950' >
       
       <input type='text'
       placeholder='write the limit of peoples'
       className=' w-full
          text-xl
         p-2  
        focus:outline-none bg-white text-left 
        ' />
        <div className='w-full border-l-4 border-blue-950'>
       <Choose5 />
       </div>
     </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-4/5 h-auto mt-5  text-2xl 
          text-blue-950 font-bold
       bg-white text-left 
        border-4 border-blue-950' >
      <p className='pt-2 pl-4'>generate program id </p>
      <button className='text-2xl m-2 bg-blue-900
      h-auto w-auto px-3 pb-1 rounded-xl text-white
      hover:bg-lime-800'>generate </button>
     </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-4/5 h-auto mt-5  text-2xl 
          text-blue-950 font-bold
       bg-white text-left
        border-4 border-blue-950' >
      <p className='pt-2 pl-4'>generate program link </p>
      <button className='text-2xl m-2 bg-orange-800
      h-auto w-auto px-3 pb-1 rounded-xl text-white
      hover:bg-emerald-800'>generate </button>
     </button>
      </div>

      <div className='flex justify-center'>
      <input type='date'
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <input type='time'
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-4 border-slate-950' />
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write the description here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-60 mt-5  text-xl 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-10
       text-slate-50 bg-black
      hover:bg-slate-900 rounded-xl max-sm:w-3/5 mt-10 text-xl'>create a lecture </button>
      </div>

    </div>
         
    </div>
  )
}

export default Program