'use client'
import React from 'react'
import { useState } from 'react'
import Level4 from './Lectures/Level4'
import Level5 from './Lectures/Level5'
import Level6 from './Lectures/Level6'

const Intermediate = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Level4');
 
  return (
   
   <div className='flex justify-center  font-bold  
   border-2 border-black  bg-purple-500'>
     
       <div className='flex flex-col w-full m-1
        bg-white   border-2 border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          '> 

          <button onClick={() => setSelectedRoute('Level4')}
          type='button' className='text-white bg-purple-800 px-3 w-auto h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Level5')}
          type='button' className='text-white bg-purple-800 px-3 w-auto h-7  mt-1
          rounded-sm hover:bg-gray-900'>Books </button>

          <button onClick={() => setSelectedRoute('Level6')}
          type='button' className='text-white bg-purple-800 px-3 w-auto h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>Articles </button>

            
          </h1>
          <div className='h-auto overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

          {selectedRoute === 'Level4' && <Level4 />}
           {selectedRoute === 'Level5' && <Level5 />}
           {selectedRoute === 'Level6' && <Level6 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Intermediate