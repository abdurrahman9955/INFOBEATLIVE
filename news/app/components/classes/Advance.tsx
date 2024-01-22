'use client'
import React from 'react'
import { useState } from 'react'
import Level7 from './Lectures/Level7'
import Level8 from './Lectures/Level8'
import Level9 from './Lectures/Level9'

const Advance = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Level7'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  
  return (
   
   <div className='flex justify-center  font-bold  
   border-4 border-black  bg-emerald-500'>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 

          <button onClick={() => setSelectedRoute('Level7')}
          type='button' className='text-white bg-emerald-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Level8')}
          type='button' className='text-white bg-emerald-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Books </button>

          <button onClick={() => setSelectedRoute('Level9')}
          type='button' className='text-white bg-emerald-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

            
          </h1>
           <div className='h-auto overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

          {selectedRoute === 'Level7' && <Level7 />}
           {selectedRoute === 'Level8' && <Level8 />}
           {selectedRoute === 'Level9' && <Level9 />}
         
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Advance