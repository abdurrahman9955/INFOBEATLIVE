
import React, { useState }  from "react"
import Link from "next/link"
import Select3 from "@/app/components0/Select/Select3"




const Group = () => {

  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-orange-500 border-2 border-black 
     '>
      <div className="flex justify-center  text-xl text-black font-bold"> <h1>
        crate your group here </h1></div>

      <div className="flex justify-center text-xs text-black font-bold mt-5 mb-5 ">
         <h1 className="max-w-2xl border-2 border-black h-auto p-1 m-1">
       this group will not be available to everybody in this platform, no one can 
       access it without your permission, if you want to add some one in this group 
       you will see members button in the next page you can add who you want to add,
       and you can add others of your members as an admin  in this group, you will see 
       an admin button too in the next page also once you finish this step, your link of 
       this group can only be address of your group if some one follow it he can only see 
       some previous activities, but he cannot like comment or posting or any task 
       without your  permission or some of your admin, you can make video call with all of your 
       members,  group calling, or chatting, you and your members   can make post for videos 
       photos among others,

       you cant click the
        <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-lg" 
           > about button </Link> in this public home page 
        to know all about private both class and group as well as everything is this page,

        for more information you can visit our 
       <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-lg" 
       > privacy and policy </Link> in order to know all about this platform, thanks so much.

        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
          border-2 border-slate-950  text-xs  bg-white
          '
         placeholder='your group name'  />
      </div>

     

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm   bg-white
           '
         placeholder='purpose of your group'  />
      </div>
     

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-auto mt-5  text-sm 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left pb-1
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a link
          
       <button className=' w-auto px-3  bg-orange-600  rounded 
        text-white hover:bg-purple-700'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-auto mt-5  text-xs 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left pb-1
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             Create an id
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>Create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-auto  mt-5  text-sm
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left pb-1
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             Create a handle
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Select3 /> </button>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-40 p-1 mt-5
           border-2 border-slate-950 text-sm     bg-white
          '
         placeholder='rules of your group '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm      bg-white
          '
         placeholder='write the description about your group '  />
      </div>
       
      <Link href={{pathname:'/Group'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-5'>validate group</button>
      </div></Link>
       
      <Link href={{pathname:'/Manage_Channel'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create group
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default Group