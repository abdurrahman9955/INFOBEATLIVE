
import React, { useState }  from "react"
import Link from "next/link"
import Select4 from "@/app/components0/Select/Select4"


const BeginnersClassHome = () => {
 
  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-lime-500 border-2 border-black 
     '>
      <div className="flex justify-center   text-xl text-white font-normal"> <h1>
      <p className=" bg-lime-700 rounded-lg p-5  ">
      crate class for beginner students </p>
      </h1></div>
    
      <div className="flex justify-center text-sm text-black font-bold mt-5 mb-5 ">
       <h1 className="max-w-3xl rounded h-auto  p-5 m-1 text-white
       bg-gradient-to-b from-lime-600 to-blue-500
       ">
     
      <h1 className=" bg-lime-700 rounded-lg p-5  font-normal">
       <p className="text-lg">
       Class Creation Guidelines
       </p>

       <p className="mt-2">
       Creating a class on our platform means you are committed to teaching, training,
       and mentoring your students with comprehensive guidance to ensure their success.
       </p> </h1>

       <p className="mt-2 text-lg  bg-lime-700 rounded-lg p-5  font-normal">
       Here's what you need to know:</p>

       <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
       <h1 className="text-lg">Mentorship and Guidance:</h1> As an instructor, you are expected to provide ongoing 
       support and respond to your students' questions and needs. Frequent and regular
       communication is essential to ensure effective learning. </p>

       <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
       <h1 className="text-lg">Live Interaction:</h1> You should be willing to engage in live mentoring sessions and 
       interactions. Our platform offers all the necessary tools for live video,
       examinations, announcements, and more to facilitate effective communication
       with your students. </p>

       <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
       <h1 className="text-lg">Comprehensive Support:</h1> Simply creating a course is not enough. You must 
      actively engage with your students, ensuring they understand and can apply 
      the skills taught. Regular feedback and mentoring are crucial for student 
      satisfaction and success. </p>

      <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
      <h1 className="text-lg"> Assessment and Certification:</h1>  Students must complete three examinations for each 
      class to receive certification, ensuring they are well-prepared and have mastered 
      the course material. </p>

      <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
      <h1 className="text-lg">Community and Compliance:</h1> Adhere to our privacy policies and guidelines to 
      help us build a valuable and supportive community. Your cooperation and 
      commitment are essential to our platform's success. </p>

      <p className="mt-2 mb-3 bg-lime-700 rounded-lg p-5  font-normal">
      Thank you for your understanding and support. </p>

      
      <p className="mt-2 mb-3 bg-lime-700 rounded-lg p-5  font-normal">
        you can click the
        <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-lg" 
       > about button </Link> at the top of this page and class home page, 
       this is recommended  if you need to know all about both academy 
       and  class and also group as well as everything in this app.
      <br/>
       for more information you can visit our 
       <Link href={{pathname:'/privacy'}} className="text-indigo-950 font-bold text-lg" 
       > privacy and policy </Link> in order to know all about this platform,
       thanks so much for your contribution to the community.</p>

        </h1></div>
    
        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
          border-2 border-slate-950  text-sm  bg-white  rounded-lg
          '
         placeholder='your class name'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-10 p-1 mt-5 
          border-2 border-slate-950  text-sm  bg-white rounded-lg
          '
         placeholder='your class purpose'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-40 p-2 mt-5
           border-2 border-slate-950 text-sm     bg-white rounded-xl
          '
         placeholder='rules of your class  '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm     bg-white rounded-xl
          '
         placeholder='write the description about your class '  />
      </div>
       
      <Link href={{pathname:'/Class'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-5'>validate class</button>
      </div></Link>
      
      <Link href={{pathname:'/bootCamp/beginnersClass'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create class
      </button>  
      </div></Link>
    </div>
  )
}

export default BeginnersClassHome