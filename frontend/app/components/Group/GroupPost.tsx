import React from 'react'
import Upload from '@/app/components/upload/upload'
import Link from 'next/link'

const GroupPost = () => {
  return (
    <div className='flex justify-center  pt-10 h-auto bg-lime-500 border-2 border-black' >
     <div className='flex flex-col min-h-screen lg:w-2/4  max-lg:w-3/4 max-md:w-5/6' >

       <div className="flex justify-center mt-10  text-sm text-white font-normal"> 
        <p className=" bg-slate-950 rounded-lg p-2 px-10  ">upload and publish your post </p></div>

    
      <div className='flex justify-center'>
     <div className='flex flex-col lg:w-3/4  max-lg:w-3/4 max-md:w-full 
     mt-10 gap-5 font-bold p-5 text-xs
     border-2  border-slate-950  '>

     <Link href={{pathname:'/Group/postArticles'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950 '> post your article</button></Link>

      <Link href={{pathname:'/Group/postVideos'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950'>post your video </button></Link>

     <Link href={{pathname:'/Group/postShorts'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950 '>post your short video</button></Link>

      <Link href={{pathname:'/Group/postAudios'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded hover:bg-violet-950'>post your audio</button></Link>

     <Link href={{pathname:'/Group/postPhotos'}}>
     <button type='button' className='w-full   bg-slate-950 text-white h-7
     rounded  hover:bg-violet-950'> post your photo</button></Link>

     </div>
     </div>



     </div>


    </div>
  )
}

export default GroupPost