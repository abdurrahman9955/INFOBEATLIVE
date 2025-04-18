import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import Admin0 from './Connect/Admin0';
import Admin from './Connect/Admin'
import Admin1 from './Connect/Admin1';
import Admin2 from './Connect/Admin2';
import Admin3 from './Connect/Admin3';
import Admin4 from './Connect/Admin4';


const Connect = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [Members, setMembers] = useState(false);
  const [Connected, setConnected] = useState(false);
  const [Start, setStart] = useState(false);
  const [View, setView  ] = useState(false);
  const [previous, setPrevious  ] = useState(false);
    
  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

  };  const handleMembers = ()=>{
    setMembers(!Members);

  };  const handleConnected = ()=>{
    setConnected(!Connected);

  };  const handleStart = ()=>{
    setStart(!Start);

  };  const handleView = ()=>{
    setView(!View);

  };    const handlePrevious = ()=>{
    setPrevious(!previous);

  };  
 
 
  return (
    <div className='flex flex-col min-h-screen py-5 bg-lime-500  border-2 border-black'>
        <div className="flex flex-col  ">
        <h1 className="flex justify-center text-xl text-black font-bold max-sm:text-xs 
         sm:ml-10 max-sm:ml-3 ">
            connect your admin and member </h1>
             <div className='flex justify-center'>
            <h1 className='items-center text-sm text-black border-2 m-1
             border-black rounded-lg h-auto max-w-xl lg:max-w-2xl mt-5  font-bold p-1'>

             <p className='text-lg m-1'>Meeting Page</p>

            <p className='text-sm m-1'>Once an admin creates a program, the meeting will 
              begin on this page when the time reach. Here, admins can see all the members who have 
              joined the meeting. Additionally, admins have the ability to include or 
              connect with members who were not added during the initial program creation.</p>
          </h1>
          </div>
         </div>

         <div  >
            {Members && (<Admin />)}
               </div>

               <div  >
            {MenuVisible && (<Admin0 />)}
               </div>

    
            <div  >
            {View && (<Admin1 />)}
               </div>

               <div  >
            {Connected && (<Admin2 />)}
               </div>

               <div  >
            {previous && (<Admin4 />)}
               </div>

               <div >
            {Start && (<Admin3 />)}
               </div>
           

          <div className='flex justify-center'>
         <div className='flex flex-col lg:w-2/5  max-lg:w-2/4 max-md:w-5/6 mt-10 gap-5 
         font-bold   border-2  border-slate-950 sm:p-5 max-sm:p-5 md:text-sm text-sm'>

              
              <button onClick={handleMembers}
               type='button' className='w-full text-xs  bg-black text-white h-7
              rounded-sm  hover:bg-violet-950 '>connect the members</button>

              
              <button onClick={handleMenuClick}
               type='button' className='w-full text-xs  bg-black text-white h-7
              rounded-sm  hover:bg-violet-950'>connect the admins</button>

             
             <button onClick={handleView}
             type='button' className='w-full text-xs  bg-black text-white h-7
             rounded-sm hover:bg-violet-950 '>view your invited</button>

            
            <button  onClick={handleConnected}
             type='button' className='w-full text-xs  bg-black text-white h-7
             rounded-sm hover:bg-violet-950'>members  connected</button>

            <button  onClick={handlePrevious}
             type='button' className='w-full text-xs  bg-black text-white h-7
             rounded-sm hover:bg-violet-950'>previous connection</button>
     </div>
     </div>

     <div  onClick={handleStart}
      className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-black font-bold
      hover:bg-slate-900 rounded-sm max-sm:w-3/5 mb-10 mt-5 text-xs'>start discoursing </button>
      </div>

    </div>
  )
}

export default Connect