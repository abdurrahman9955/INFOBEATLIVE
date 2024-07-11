import React from 'react'

const Home7 = () => {
  return (
   
   <div className='flex justify-center  font-bold 
   border-4 border-black  bg-lime-400 '>
     
       <div className='flex flex-col  w-full m-2
        bg-white  border-4 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto overflow-x-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-lime-400 overflow-x-auto'> 

          <button type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Radio </button>

          <button type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Podcast </button>

          <button type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Print Media </button>

            
          </h1>
             <div className='h-screen overflow-y-auto  p-2   '>
           

           <h1>well come</h1>
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Home7