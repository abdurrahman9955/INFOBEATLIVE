'use Client'
import React from 'react'
import { useState } from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Footer from '../../Footer';
import Footer2 from '../../Footer2';

const Home4 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Header1');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-500'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
          font-bold  pb-1  bg-lime-500'> 

          <button onClick={() => setSelectedRoute('Header1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Header2')}
           type='button' className='text-white bg-lime-950  px-2
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('Header3')}
           type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Others </button>

          <button onClick={() => setSelectedRoute('Header4')}
           type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1 hidden
          rounded  hover:bg-gray-900'>Others </button>


            
          </h1>
             <div className='h-auto overflow-y-auto   '>
             <div className='flex flex-row'>
             <Footer />
             {selectedRoute === 'Header1' && <Header1 />}
             {selectedRoute === 'Header2' && <Header2 />}
             {selectedRoute === 'Header3' && <Header3 />}
             {selectedRoute === 'Header4' && <Header4 />} 
             <Footer2 />
             </div>
           </div>
          
          
                 
         </div>
         </div>
         
    </div>
  )
}

export default Home4