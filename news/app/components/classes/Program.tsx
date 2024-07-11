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
    <div className='flex flex-col  py-5 bg-lime-500 border-2 border-black '>
          
          <div  >
            {selectedRoute && (<History />)}
               </div>

        <div className="flex flex-col  ">
        <h1 className="flex justify-center text-xl text-black font-bold max-sm:text-lg  ">
            create your program here </h1>

            <div className='flex justify-center'>
      <button  onClick={handleClick}
      type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-slate-950
      hover:bg-indigo-950 rounded-sm max-sm:w-3/5 mt-10 text-sm'>view your lectures </button>
      </div>


             <div className='flex justify-center'>
            <h1 className='items-center text-sm text-black border-2 m-1
             border-black h-auto max-w-xl lg:max-w-2xl mt-5  font-bold p-1'>
            please create your lecture date and time as well as the issue 
            you want o discourse, this page was create in order for you to create your 
            lecture and settle the meeting about wha you want to discourse and the 
            amount of people among others.

          </h1>
          </div>
         </div>

         <h1 className="flex justify-center text-xl text-black font-bold max-sm:text-xs ">
            create your new lecture here </h1>

         <div className=' ' >
     
      <div className='flex justify-center'>
      <input type='text'
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-full m-2 h-10 mt-5  text-lg
        focus:outline p-1 font-bold
        bg-white text-left 
        border-2 border-blue-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2
          h-auto  mt-5 font-bold
          border-2 border-blue-950  text-sm bg-white
          '
         >  <Choose3 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto 
          font-bold border-2 border-blue-950  text-sm bg-white
          '
         >  <Choose4 /> </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-full m-2 h-auto mt-5  text-sm 
          text-blue-950 font-bold
       bg-white text-left 
        border-2 border-blue-950' >
       
       <input type='text'
       placeholder='write the limit of peoples'
       className=' w-full   text-sm p-1  pt-2
        focus:outline-none bg-white text-left  ' />
        <div className='w-full border-l-2 border-blue-950'>
       <Choose5 />
       </div>
     </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-full m-2 h-auto mt-5  text-sm 
          text-blue-950 font-bold
       bg-white text-left 
        border-2 border-blue-950' >
      <p className='pt-1 pl-4'>generate program id </p>
      <button className='text-sm m-1 bg-blue-900
      h-auto w-auto px-3 pb-1 rounded-sm text-white
      hover:bg-lime-800'>generate </button>
     </button>
      </div>

      <div className='flex justify-center'>
     <button type='button' 
       className='flex justify-between lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-full m-2 h-auto mt-5  text-sm
          text-blue-950 font-bold
       bg-white text-left
        border-2 border-blue-950' >
      <p className='pt-1 pl-4'>generate program link </p>
      <button className='text-sm m-1 bg-orange-800
      h-auto w-auto px-3 pb-1 rounded-sm text-white
      hover:bg-emerald-800'>generate </button>
     </button>
      </div>

      <div className='flex justify-center'>
      <input type='date'
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8 mt-5  text-sm 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <input type='time'
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  max-sm:w-full m-2 h-8 mt-5  text-sm
        focus:outline p-1 font-bold
        bg-white text-left 
        border-2 border-slate-950' />
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write the description here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-60 mt-5  text-sm
         p-1 font-bold
        bg-white text-left 
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-black
      hover:bg-slate-900 rounded-sm max-sm:w-3/5 mb-10 mt-5 text-xs'>create a lecture </button>
      </div>

    </div>
         
    </div>
  )
}

export default Program