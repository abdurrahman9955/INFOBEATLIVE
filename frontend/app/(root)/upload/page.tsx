import React from 'react'
import Upload from '@/app/components/upload/upload'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center  pt-10 h-auto bg-lime-500 border-2 border-black' >
     <div className='flex flex-col min-h-screen lg:w-2/4  max-lg:w-3/4 max-md:w-5/6' >
      <h1 className='flex justify-center md:text-lg max-md:text-sm
       text-black font-bold '>
         upload and publish content</h1>

     <h1 className='text-sm text-slate-950 mt-5 font-bold p-1 border-2 border-black '>
      you can upload every thing in this website, like 
      videos for more and several content, you can upload articles
      like blog news writing content or any content relate to writing,
      you can upload books or any other like magazine news paper or any others
      relate to sheet or book, you can upload pdf file or folder and every thing,
      click the buttons below to choose which you want to upload and publish 
      thanks for using our platform you can give us <Link href={{pathname:'/Feedback'}}
      ><span className='font-bold text-lg text-blue-800'> Feedback </span></Link>
      or to <Link href={{pathname:'/Contact'}}
      ><span className='font-bold text-lg text-blue-800'> Contact us </span></Link> 
       directly for more  or any specific issue thank you so much.
     </h1>
      
      <div className='flex justify-center'>
     <div className='flex flex-col lg:w-3/4  max-lg:w-3/4 max-md:w-full 
     mt-10 gap-5 font-bold p-5 text-xs
     border-2  border-fuchsia-950  '>

     <Link href={{pathname:'/upload_articles'}}>
     <button type='button' className='w-full   bg-fuchsia-950 text-white h-7
     rounded  hover:bg-violet-950 '>upload & publish your article</button></Link>

     <Link href={{pathname:'/upload_books'}}>
     <button type='button' className='w-full   bg-fuchsia-950 text-white h-7
     rounded  hover:bg-violet-950'>upload & publish your books</button></Link>

      <Link href={{pathname:'/upload_videos'}}>
     <button type='button' className='w-full   bg-fuchsia-950 text-white h-7
     rounded  hover:bg-violet-950'>upload & publish your videos </button></Link>

     <Link href={{pathname:'/upload_shorts'}}>
     <button type='button' className='w-full   bg-fuchsia-950 text-white h-7
     rounded  hover:bg-violet-950 '>upload &publish your short videos</button></Link>

      <Link href={{pathname:'/upload_others'}}>
     <button type='button' className='w-full   bg-fuchsia-950 text-white h-7
     rounded hover:bg-violet-950'>upload & publish others</button></Link>
     </div>
     </div>



     </div>


    </div>
  )
}

export default page