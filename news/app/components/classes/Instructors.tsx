'use client'
import React from 'react'
import { useState } from 'react';
import Remove from './Small/Remove';
import AddNew from './Small/AddNew';


const Instructors = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<boolean>(false);
 

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };    const handleClick = ()=>{
  setSelectedRoute(!selectedRoute);

};   


  return (
    <div className='flex justify-center flex-col bg-cyan-500 pt-5 w-full font-bold
     border-2 border-slate-950 '>

             <div  >
            {selectedRoute && (<Remove />)}
               </div>

               <div  >
            {MenuVisible && (<AddNew />)}
               </div>
        
        <h1 className='flex justify-center  mb-5  text-xl text-slate-950 font-bold 
          max-md:text-lg
        '>now there are (0) Instructors</h1>

         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-3/4 font-bold 
         bg-white border-2 border-slate-950 pt-2 max-md:w-11/12   md:text-sm '> 

              <div className="flex  justify-between gap-2 w-11/12 ml-3 lg:ml-5 
               border-slate-950 ">
               
              <div className=''>
              <button onClick={handleMenuClick}
               className='text-xs text-black w-28 h-7 bg-cyan-600  
              hover:bg-lime-700 rounded font-bold border-slate-950 border
              '>Add new </button>
            </div>
               
               <div className=" shadow-lg w-11/12 bg-cyan-600 border  h-7
                border-slate-950 rounded flex-initial   hover:bg-lime-700">
                   <h1 className='flex justify-center font-bold text-black mt-1
                   text-xs'>Admins</h1>
                </div>

                <div>
              <button onClick={handleClick}
               className='text-xs text-black w-28 h-7 bg-cyan-600  
              hover:bg-lime-700 rounded font-bold border-slate-950 border
              '>remove</button>
            </div>

                </div>
                
                <div className='w-full  mt-2 border-b-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-1'>
         <div className='  w-full gap-2 '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Instructors