'use client'
import React from 'react'
import { useState } from 'react'
import Level1 from './Lectures/Level1'
import Level2 from './Lectures/Level2'
import Level3 from './Lectures/Level3'

const Videos = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Level1');
 
  return (
 
   <div className='flex justify-center  font-bold  
   border-2 border-black  bg-orange-500'>
     
       <div className='flex flex-col w-full m-1
        bg-white   border-2
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
          font-bold  pb-1
          '> 

          <button onClick={() => setSelectedRoute('Level1')}
          type='button' className='text-white bg-orange-700 px-3 w-auto h-7  mt-1
          rounded-sm  hover:bg-gray-900'>Completed </button>

          <button onClick={() => setSelectedRoute('Level2')}
          type='button' className='text-white bg-orange-700 px-3 w-auto h-7  mt-1
          rounded-sm  hover:bg-gray-900'>Queue </button>

          <button onClick={() => setSelectedRoute('Level3')}
          type='button' className='text-white bg-orange-700 px-3 w-auto h-7  mt-1
          rounded-sm  hover:bg-gray-900'>Coming Soon </button>

            
          </h1>
          <div className='h-auto overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

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