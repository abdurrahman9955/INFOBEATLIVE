'use Client'
import React from 'react'
import { useState } from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Footer from '../../Footer';

const Home4 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Header1'
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

          <button onClick={() => setSelectedRoute('Header1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Header2')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('Header3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

          <button onClick={() => setSelectedRoute('Header4')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>


            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Header1' && <Header1 />}
             {selectedRoute === 'Header2' && <Header2 />}
             {selectedRoute === 'Header3' && <Header3 />}
             {selectedRoute === 'Header4' && <Header4 />} 
           </div>
           <Footer />
          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home4