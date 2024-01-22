'use client'
import React from 'react'
import { useState } from 'react'
import Level4 from './Lectures/Level4'
import Level5 from './Lectures/Level5'
import Level6 from './Lectures/Level6'

const Intermediate = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Level4'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  
  return (
   
   <div className='flex justify-center  font-bold  
   border-4 border-black  bg-purple-500'>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 

          <button onClick={() => setSelectedRoute('Level4')}
          type='button' className='text-white bg-purple-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Level5')}
          type='button' className='text-white bg-purple-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Books </button>

          <button onClick={() => setSelectedRoute('Level6')}
          type='button' className='text-white bg-purple-800 p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

            
          </h1>
          <div className='h-auto overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

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