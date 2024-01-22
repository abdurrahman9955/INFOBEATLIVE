'use Client'
import React from 'react'
import { useState } from 'react';
import Book2 from './Book2';
import Book3 from './Book3';
import Book1 from './Book1';

const Home15 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Book1'
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

          <button onClick={() => setSelectedRoute('Book1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Book2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Latest </button>

          <button onClick={() => setSelectedRoute('Book3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Book1' && <Book1 />}
             {selectedRoute === 'Book2' && <Book2 />}
             {selectedRoute === 'Book3' && <Book3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home15