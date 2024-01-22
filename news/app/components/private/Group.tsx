
import React, { useState }  from "react"
import Link from "next/link"
import Select3 from "@/app/components0/Select/Select3"




const Group = () => {
   


  return (
    <div className='flex flex-col w-full h-auto pt-10 bg-orange-500 border-4 border-black 
     '>
      <div className="flex justify-center  text-3xl text-black font-bold"> <h1>
        crate your group here </h1></div>

      <div className="flex justify-center text-xl text-black font-bold mt-5 mb-10 ">
         <h1 className="max-w-2xl border-4 border-black h-auto p-2 m-3">
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
        <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-2xl" 
           > about button </Link> in this public home page 
        to know all about private both class and group as well as everything is this page,

        for more information you can visit our 
       <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-2xl" 
       > privacy and policy </Link> in order to know all about this platform, thanks so much.

        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
          border-4 border-slate-950  text-xl  bg-white
          '
         placeholder='your group name'  />
      </div>

     

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
         border-4 border-slate-950  text-xl   bg-white
           '
         placeholder='purpose of your group'  />
      </div>
     

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a link
          
       <button className=' w-auto px-3  bg-orange-600  rounded 
        text-white hover:bg-purple-700'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             Create an id
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>Create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto  mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             Create a handle
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white
          '
         >  <Select3 /> </button>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl      bg-white
          '
         placeholder='rules of your group '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-60 p-2 mt-5
           border-4 border-slate-950 text-xl      bg-white
          '
         placeholder='write the description about your group '  />
      </div>
       
      <Link href={{pathname:'/Group'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-3 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-10'>validate group</button>
      </div></Link>
       
      <Link href={{pathname:'/Manage_Channel'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-10 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create group
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default Group