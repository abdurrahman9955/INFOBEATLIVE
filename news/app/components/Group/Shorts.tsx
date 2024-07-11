import React from 'react'

const Shorts = () => {
  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-amber-500'>
     
       <div className='flex flex-col w-full m-1
        bg-white border-2
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1'> 

          <button type='button' className='text-white bg-amber-700 p-1 w-28 h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>previous </button>

          <button type='button' className='text-white bg-amber-700 p-1 w-28 h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>latest </button>

          <button type='button' className='text-white bg-amber-700 p-1 w-28 h-7  mt-1 
          rounded-sm  hover:bg-gray-950'>oldest </button>

            
          </h1>
          <h1 className='flex justify-center text-xs font-bold '>now there are (0) Shorts</h1>
          <div className='flex flex-wrap h-screen overflow-y-auto gap-2 m-1 p-1 border-2
           border-black  '>
           

           <h1>well come</h1>    
          
          </div>        
        </div>
        </div>
        
    </div>
  )
}

export default Shorts