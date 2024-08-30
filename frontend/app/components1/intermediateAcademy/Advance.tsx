'use client'
import React from 'react'
import { useState } from 'react'
import Level7 from './Lectures/Level7'
import Level8 from './Lectures/Level8'
import Level9 from './Lectures/Level9'

const Advance = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Level7');
 
  return (

   <div className='flex justify-center  font-bold  
   border-2 border-black  bg-pink-500'>
     
       <div className='flex flex-col w-full m-1
        bg-white   border-2
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          '> 

          <button onClick={() => setSelectedRoute('Level7')}
          type='button' className='text-white bg-pink-700 px-2 w-auto h-7  mt-1
          rounded-sm  hover:bg-gray-900'>FirstExam </button>

          <button onClick={() => setSelectedRoute('Level8')}
          type='button' className='text-white bg-pink-700 px-2 w-auto h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>SecondExam </button>

          <button onClick={() => setSelectedRoute('Level9')}
          type='button' className='text-white bg-pink-700 px-2 w-auto h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>ThirdExam </button>

            
          </h1>
           <div className='h-auto overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

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