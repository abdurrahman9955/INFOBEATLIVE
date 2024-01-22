'use Client'
import React from 'react'
import { useState } from 'react';
import Classes1 from './Classes1';
import Classes2 from './Classes2';
import Classes3 from './Classes3';


const Home2 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Classes1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);


  return (
   
   <div className='flex justify-center  font-bold 
   border-4 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-2
        bg-white  border-4 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Classes1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Classes2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Enrolled </button>

          <button onClick={() => setSelectedRoute('Classes3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Classes1' && <Classes1 />}
             {selectedRoute === 'Classes2' && <Classes2 />}
             {selectedRoute === 'Classes3' && <Classes3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home2