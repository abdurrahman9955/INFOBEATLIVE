import Link from 'next/link'
import React from 'react'

const Subscribers = () => {
  return (
    <div className='flex flex-col min-h-screen py-5 bg-lime-500 border-2 border-red-950'>
        <div className="flex flex-col  ">
        <h1 className="flex justify-center text-xl font-bold max-sm:text-lg text-slate-950">

            Please Apply For Admission Here </h1>
             <div className='flex justify-center'>
            <h1 className='items-center text-sm  border-2 m-1 border-slate-950 h-auto 
            max-w-xl lg:max-w-2xl mt-5 rounded-xl font-bold p-1 text-slate-950 '>
             welcome to our class hope you will learn more and important knowledge about 
             what we offer in this class, please apply for your appropriate position,
             if your apply for beginner role you can only access the beginners course,
             but you can access all of our activities in this class like seminar question & answer
             among others, if you apply for intermediate role you can access both beginners and 
             intermediate, if you apply for advance you can access all of our activities here 
             like lectures lessons mentoring and every thing please apply for your appropriate role
             , we will verify you as our student to know that you can be able to learn what we really
             offer in this class thank for participating hope you will enjoy learning and improving
             your life towards the top thanks so much.
              

          </h1>
          </div>
         </div>
           
          <div className='flex justify-center'>
         <Link href={{pathname:'/Class/Privacy'}}>
             <button type='button' className='w-80 mt-5 bg-slate-950 text-white h-7
              text-xs  rounded-sm font-bold hover:bg-slate-950'> Our Privacy 
               </button></Link></div>

               <div className='flex justify-center'>
         <Link href={{pathname:'/Class/Privacy'}}>
             <button type='button' className='w-80 mt-5 bg-slate-950 text-white h-7
              text-xs  rounded-sm font-bold hover:bg-slate-950'> For Instructors 
               </button></Link></div>


          <div className='flex justify-center'>
         <div className='flex flex-col lg:w-2/4  max-lg:w-2/4 max-md:w-5/6 mt-5 gap-5
         font-bold   border-2  border-slate-950 sm:p-5 max-sm:p-5 '>

              <Link href={{pathname:'/Class/Beginner'}}>
              <button type='button' className='w-full  text-xs bg-slate-950 text-white h-7
              rounded-sm  hover:bg-slate-950'>Apply for Level 1</button></Link>

             <Link href={{pathname:'/Class/Intermediate'}}>
             <button type='button' className='w-full text-xs  bg-slate-950 text-white h-7
              rounded-sm  hover:bg-slate-950'> Apply for Level 2 </button></Link>

             <Link href={{pathname:'/Class/Advance'}}>
             <button type='button' className='w-full  text-xs bg-slate-950 text-white h-7
             rounded-sm hover:bg-slate-950 '>Apply for Level 3</button></Link>

            <Link href={{pathname:'/Class/Admission'}}>
             <button type='button' className='w-full text-xs  bg-slate-950 text-white h-7
             rounded-sm  hover:bg-slate-950 '>Views Your Admission</button></Link>

            <Link href={{pathname:'/Class/Certificate'}}>
             <button type='button' className='w-full text-xs  bg-slate-950 text-white h-7
             rounded-sm  hover:bg-slate-950 '>Apply for certificate</button></Link>

     </div>
     </div>

    </div>
  )
}

export default Subscribers