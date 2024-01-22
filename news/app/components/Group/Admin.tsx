'use client'
import React from 'react'
import { useState } from 'react';
import Add from './Admin/Add';
import Remove from './Admin/Remove';


const Admin = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<boolean>(false);
  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };    const handleClick = ()=>{
  setSelectedRoute(!selectedRoute);

};   


  return (
    <div className='flex justify-center flex-col bg-emerald-400 pt-10 w-full font-bold
     border-4 border-slate-950 '>

           <div  >
            {MenuVisible && (<Add/>)}
               </div>

               <div  >
            {selectedRoute && (<Remove />)}
               </div>
        
        <h1 className='flex justify-center mt-5 mb-5  text-5xl text-slate-950 font-bold 
          max-md:text-2xl
        '>now there are (0) Admin</h1>

         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-3/4 font-bold 
         bg-white border-8 border-slate-950 pt-5 max-md:w-11/12   md:text-xl '> 

              <div className="flex  justify-between gap-4 w-11/12 ml-3 lg:ml-5 
               border-slate-950 ">
               
              <div className=''>
              <button onClick={handleMenuClick}
               className='text-2xl text-black w-28 h-10 bg-emerald-500  
              hover:bg-lime-700 rounded font-bold border-slate-950 border-2
              '>Add new </button>
            </div>
               
               <div className=" shadow-lg w-11/12 bg-emerald-500 border-2  h-10
                border-slate-950 rounded flex-initial   hover:bg-lime-700">
                   <h1 className='flex justify-center font-bold text-black mt-1
                   text-2xl'>Admins</h1>
                </div>

                <div>
              <button onClick={handleClick}
               className='text-2xl text-black w-28 h-10 bg-emerald-500  
              hover:bg-lime-700 rounded font-bold border-slate-950 border-2
              '>remove</button>
            </div>

                </div>
                
                <div className='w-full mt-2  border-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-3'>
         <div className='  w-full gap-4  '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Admin