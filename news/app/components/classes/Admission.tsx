
import React, { useState }  from "react"
import Link from "next/link"




const Admission = () => {
   


  return (
    <div className='flex flex-col w-full h-auto pt-10 bg-yellow-400 border-4 border-black 
     '>
      <div className="flex justify-center  text-3xl text-black font-bold"> <h1>
        crate your channel here </h1></div>

      <div className="flex justify-center text-xl text-black font-bold mt-5 mb-10 ">
         <h1 className="max-w-2xl border-4 border-black h-auto p-2 m-3">
        this channel will be available for every body in this platform, once you create it 
        you can upload video or short-video and audio or songs only, and you can monetize 
        your content if  you fullfil the requirements, please create your 
        channel to be useful for your audience and viewers, if you need to upload books 
        or newspaper magazine only what to do is to go back to the library, or studio if 
        your content is an articles and blogs or pdf, and if you need your content to 
        only be for sale you can go back to the 
        <Link href={{pathname:'/store'}} className="text-blue-900"> store page </Link>
        in order to sell your product to the people, and you can visit 
        <Link href={{pathname:'/privacy'}} className="text-blue-900"> privacy and policy page </Link>
        to know more about this platform, thanks so much for joining us.
        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
          border-4 border-slate-950  text-xl  bg-white
          '
         placeholder='your channel name'  />
      </div>

      <div className='flex justify-center'>
         <input type='email' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950  text-xl bg-white
          '
         placeholder='your channel type'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
         border-4 border-slate-950  text-xl  bg-white
           '
         placeholder='purpose of your channel'  />
      </div>
      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950   text-xl  bg-white
           '
         placeholder='choose category '  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950  text-xl   bg-white
          '
         placeholder='generate link of your channel'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950 text-xl   bg-white
         '
         placeholder='create channel id'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950 text-xl   bg-white
         '
         placeholder='create channel handle'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='category of your channel'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl    bg-white
          '
         placeholder='write your keyword'  />
      </div>

      
      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl     bg-white
          '
         placeholder='write the description about your channel '  />
      </div>
       
      <Link href={{pathname:'/Channel_Profile'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-3 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-10'>validate channel</button>
      </div></Link>
       
      <Link href={{pathname:'/Manage_Channel'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-10 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create channel
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default Admission