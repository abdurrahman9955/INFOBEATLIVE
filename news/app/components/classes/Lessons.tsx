'use client'
import React from 'react'
import { useState } from 'react'
import Level1 from './Lectures/Level1'
import Level2 from './Lectures/Level2'
import Level3 from './Lectures/Level3'

const Videos = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Level1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  
  return (
   
   <div className='flex justify-center  font-bold  
   border-4 border-black  bg-cyan-500'>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 

          <button onClick={() => setSelectedRoute('Level1')}
          type='button' className='text-white bg-cyan-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Level2')}
          type='button' className='text-white bg-cyan-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Books </button>

          <button onClick={() => setSelectedRoute('Level3')}
          type='button' className='text-white bg-cyan-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

            
          </h1>
          <div className='h-auto overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

          {selectedRoute === 'Level1' && <Level1 />}
           {selectedRoute === 'Level2' && <Level2 />}
           {selectedRoute === 'Level3' && <Level3 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Videos