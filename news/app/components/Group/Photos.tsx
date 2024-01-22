import React from 'react'

const Photos = () => {
  return (
   
   <div className='flex justify-center  font-bold 
   border-4 border-black  bg-green-500'>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 

          <button type='button' className='text-white bg-green-700 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>previous </button>

          <button type='button' className='text-white bg-green-700 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>latest </button>

          <button type='button' className='text-white bg-green-700 p-2 w-28 h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>oldest </button>

            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>now there are (0) Photos</h1>
          <div className='flex flex-wrap h-screen overflow-y-auto gap-4 m-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
           
           
            
          
          </div>        
        </div>
         </div>
        
    </div>
  )
}

export default Photos