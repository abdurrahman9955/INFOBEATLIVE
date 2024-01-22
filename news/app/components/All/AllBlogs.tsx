'use Client'
import React from 'react'
import Blog5 from './Blog5';
import { useState } from 'react';
import Blog6 from './Blog6';
import Blog7 from './Blog7';
import Blog8 from './Blog8';
import Footer from '@/app/components0/Footer';

const AllBlogs = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Blog5'
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

          <button onClick={() => setSelectedRoute('Blog5')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Blog6')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Blog7')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Blog8')}
           type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Blog5' && <Blog5 />}
             {selectedRoute === 'Blog6' && <Blog6 />}
             {selectedRoute === 'Blog7' && <Blog7 />}
             {selectedRoute === 'Blog8' && <Blog8 />}
           </div>
           <Footer />
  
                  
         </div>
         </div>
         
    </div>
  )
}

export default AllBlogs