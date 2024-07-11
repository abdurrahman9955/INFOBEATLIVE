import React from 'react'

const Videos = () => {
  return (
   
   <div className='flex justify-center  font-bold  
   border-2 border-black  bg-lime-400 '>
     
       <div className='flex flex-col w-full m-1
        bg-white   border-2 
      border-black -600 h-auto font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          bg-lime-400'> 

          <button type='button' className='text-white bg-lime-950 p-1 w-28 h-7  mt-1
          rounded  hover:bg-gray-900'>Popular </button>

          <button type='button' className='text-white bg-lime-950 p-1 w-28 h-7  mt-1 
          rounded  hover:bg-gray-900'>latest </button>

          <button type='button' className='text-white bg-lime-950 p-1 w-28 h-7  mt-1 
          rounded  hover:bg-gray-950'>oldest </button>

            
          </h1>
          <h1 className='flex justify-center text-sm font-bold '>now there are (0) videos</h1>
          <div className='h-screen overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

           <h1>well come</h1>
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Videos