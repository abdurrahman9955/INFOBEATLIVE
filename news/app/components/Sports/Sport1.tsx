'use Client'
import React from 'react'
import { useState } from 'react';
import  Sport6 from './Sport6';
import Sport7 from './Sport7';
import Sport8 from './Sport8';
import Sport9 from './Sport9';



const Sports1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Sport6');

  return (
  
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
           font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Sport6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Sport7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Sport8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Sport9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Sport6' && <Sport6 />}
             {selectedRoute === 'Sport7' && <Sport7 />}
             {selectedRoute === 'Sport8' && <Sport8 />}
             {selectedRoute === 'Sport9' && <Sport9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Sports1