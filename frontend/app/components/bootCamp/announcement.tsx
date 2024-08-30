import Link from 'next/link'
import React from 'react'

const Announcement = () => {
  return (
  
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>

       <div className='flex flex-col w-full  bg-white   border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
           font-bold  pb-1 bg-lime-500'> 

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing1 </button>

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Pricing2 </button>

          <button type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing3 </button>
           
          </h1>
        
          <div className='h-auto overflow-y-auto   '>
          <div className="bg-pink-500  min-h-screen w-full">

            <div className='flex justify-center '>
            <div className='flex  flex-col'>

            <Link href={{pathname:'/bootCamp/announcement'}}>
            <button className='bg-cyan-950 w-60 h-12 
            rounded-full text-white  mt-40'>
              create announcement</button></Link>
               
               <button className='bg-cyan-950 w-60 h-12 
               rounded-full text-white hidden  mt-5'>No announcement found</button>
               </div>

            </div>


            <div className='flex justify-between flex-wrap gap-10 p-5 mt-60'>

               <button className='bg-cyan-950 w-60 h-12 
               rounded-full text-white ml-10 '>visit  our beginner class</button>

                <button className='bg-cyan-950 w-72 
                h-12 rounded-full ml-10 text-white '> visit  our intermediate class</button>

                <button className='bg-cyan-950 
                w-60 h-12 rounded-full text-white ml-10 '>visit  our advance class</button></div>

            </div>

        
               </div>
              </div>
            </div>
          </div>
       
        
  
  )
}

export default Announcement