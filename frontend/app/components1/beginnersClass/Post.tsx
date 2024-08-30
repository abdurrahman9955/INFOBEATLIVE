import React from 'react'
import Upload from '@/app/components/upload/upload'
import Link from 'next/link'

const Post = () => {
  return (
    <div className='flex justify-center  pt-10 h-auto bg-lime-500 border-2 border-black' >
     <div className='flex flex-col min-h-screen lg:w-2/4  max-lg:w-3/4 max-md:w-5/6' >

       
        <div className='flex justify-center md:text-lg max-md:text-sm
        text-black font-bold  mt-5 '> 
         upload and publish content & courses 
        </div>
     
      <div className='flex justify-center'>
     <div className='flex flex-col lg:w-3/4  max-lg:w-3/4 max-md:w-full 
     mt-10 gap-5 font-bold p-5 text-xs
     border-2  border-slate-950  '>

     <Link href={{pathname:'/bootCamp/publish/beginner/articles'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950 '> publish your article</button></Link>

      <Link href={{pathname:'/bootCamp/publish/beginner/videos'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950'> publish your videos </button></Link>

     <Link href={{pathname:'/bootCamp/publish/beginner/shorts'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950 '> publish your short videos</button></Link>

     <Link href={{pathname:'/bootCamp/publish/beginner/course'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950'>upload & publish your courses</button></Link>

     </div>
     </div>



     </div>


    </div>
  )
}

export default Post