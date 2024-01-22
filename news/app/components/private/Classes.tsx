
import React, { useState }  from "react"
import Link from "next/link"
import Select4 from "@/app/components0/Select/Select4"




const Classes = () => {
   


  return (
    <div className='flex flex-col w-full h-auto pt-10 bg-lime-500 border-4 border-black 
     '>
      <div className="flex justify-center  text-3xl text-black font-bold"> <h1>
        crate your class here </h1></div>

      <div className="flex justify-center text-xl text-black font-bold mt-5 mb-10 ">
         <h1 className="max-w-2xl border-4 border-black h-auto p-2 m-3">
        to create class that means you want train or teach some people about specific and useful
        knowledge or skills frequently, at every length of time defend on your course requirement,
        you can create class only yourself or with your team to improve learning capability,
        some people 
        has experience to teach and guide people 
        so if you create your class 
        here is very easy to advertize your product in very 
        simple way, you can make structure of your 
        class as much as you want and you can dissect it depend on your need, for instance like 
        Level 1 Level 2 Label 3 and more, and you can add your
         team as an instructors all in the next 
        page once you create your class, you can click the
        <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-3xl" 
           > about button </Link> in this private home page this is recommended  if you need to
         know all about private both class and group as well as everything in this page,
      
       for more information you can visit our 
       <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-3xl" 
       > privacy and policy </Link> in order to know all about this platform, thanks so much.

        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
          border-4 border-slate-950  text-xl  bg-white
          '
         placeholder='your class name'  />
      </div>

     

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
         border-4 border-slate-950  text-xl  bg-white
           '
         placeholder='purpose of your class'  />
      </div>
      

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a link
          
       <button className=' w-auto px-3  bg-lime-600  rounded 
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
          
       <button className=' w-auto px-3  bg-lime-600  rounded
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
          
       <button className=' w-auto px-3  bg-lime-600  rounded
        text-white hover:bg-purple-700'>create</button>
       </h1>
      </span>
      </div>


      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='your profession'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='what you specialize in'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='your experience'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='your qualification'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='do you have have a team'  />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white
          '
         >  <Select4 /> </button>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl      bg-white
          '
         placeholder='rules of your group '  />
      </div>


      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl   bg-white
          '
         placeholder='what your student will learn'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl     bg-white
          '
         placeholder='write how your class can be useful  '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-60 p-2 mt-5
           border-4 border-slate-950 text-xl     bg-white
          '
         placeholder='write the description about your class '  />
      </div>
       
      <Link href={{pathname:'/Class'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-3 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-10'>validate class</button>
      </div></Link>
       
      <Link href={{pathname:'/Manage_Channel'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-10 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create class
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default Classes