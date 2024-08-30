'use client'
import React from 'react'
import { useState } from 'react';
import Home1 from './Small2/Home1';
import Home2 from './Small2/Home2';
import Home3 from './Small2/Home3';

const Home = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Home1');

  return (
 
   <div className='flex justify-center  font-bold  bg-lime-500 border-2 border-black'>
    
       <div className='flex flex-col w-full  bg-white   border-2 m-1 border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto '>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
           font-bold  pb-1   bg-lime-500'> 

          <button   type='button' className='text-white  w-auto pl-3 pr-3 h-7 
             mt-1 bg-slate-950 rounded-sm  hover:bg-slate-900'>Privacy1 </button>

          <button    type='button' className='text-white   w-auto pl-3 pr-3 h-7 
           mt-1 bg-slate-950 rounded-sm  hover:bg-slate-900'>Privacy2 </button>

          <button  type='button' className='text-white w-auto pl-3 pr-3 h-7  mt-1
           bg-slate-950 rounded-sm hover:bg-slate-900'>Privacy3 </button>
 
          </h1>
           <div className='h-auto overflow-y-auto   '>
          
             {selectedRoute === 'Home1' && <Home1 />}
             {selectedRoute === 'Home2' && <Home2 />}
             {selectedRoute === 'Home3' && <Home3 />}
            
           </div>
         </div>
         </div>
        
    </div>
  )
}

export default Home