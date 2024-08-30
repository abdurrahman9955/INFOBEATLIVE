import Link from 'next/link'
import React from 'react'

const Announcement = () => {
  return (
  
   <div className='flex justify-center  font-bold 
    bg-pink-500 border-2 border-black'>

       <div className='flex flex-col w-full  bg-lime-500   border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
        
          <div className='h-auto overflow-y-auto   '>
          <div className="bg-[url('/bg.jpeg')] bg-cover bg-center min-h-screen w-full">
            
            <div className='flex justify-center '>
            <div className='flex  flex-col'>

            <Link href={{pathname:'/Class/announcement'}}>
            <button className='bg-gradient-to-b from-pink-600 to-pink-900 w-60 h-12 
            rounded-full text-white  mt-40'>create announcement</button></Link>
             
               <button className='bg-gradient-to-b from-pink-600 to-pink-900 w-60 h-12 
               rounded-full text-white hidden  mt-5'>No announcement found</button>
               </div>

            </div>


            <div className='flex justify-between flex-wrap gap-10 p-5 mt-60'>

               <button className='bg-gradient-to-b from-pink-600 to-pink-900 w-60 h-12 
               rounded-full text-white ml-10 '>Subscribe for basic class</button>

                <button className='bg-gradient-to-b from-pink-600  to-pink-900 w-72 
                h-12 rounded-full ml-10 text-white '> Subscribe for exclusive class</button>

                <button className='bg-gradient-to-b from-pink-600  to-pink-900 
                w-60 h-12 rounded-full text-white ml-10 '>Subscribe for all class</button></div>

            </div>

        
               </div>
              </div>
            </div>
          </div>
       
        
  
  )
}

export default Announcement
