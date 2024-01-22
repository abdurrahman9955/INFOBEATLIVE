import React from 'react'

const Latest = () => {
  return (
   
   <div className='flex justify-center  font-bold  
   border-4 border-black  bg-sky-400 '>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4 lg:w-11/12
      border-black -600 h-auto mb-16 font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-sky-400'> 

          
          <button type='button' className='text-white bg-sky-950 p-2 pl-6 pr-6 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>your all latest content </button>

         

            
          </h1>
         
            
          <h1 className='flex justify-center gap-4   text-xl font-bold  
          bg-sky-400 pb-2 border-b-4 border-black '> 

          <button type='button' className='text-white bg-sky-950 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>videos </button>

          <button type='button' className='text-white bg-sky-950 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>shorts </button>

          <button type='button' className='text-white bg-sky-950 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>live </button>
          </h1> 
          <div className='h-screen overflow-y-auto m-2 mb-2 mx-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Latest