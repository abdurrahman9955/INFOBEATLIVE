'use Client'
import React from 'react'
import { useState } from 'react';
import Book2 from './Book2';
import Book3 from './Book3';
import Book1 from './Book1';

const Home15 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Book1');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
          font-bold  pb-1  bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Book1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Book2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Latest </button>

          <button onClick={() => setSelectedRoute('Book3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

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