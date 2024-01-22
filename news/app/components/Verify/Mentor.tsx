'use client'
import Link from "next/link"
import { useState } from "react"
import Countries4 from "@/app/components0/countries/Countries4"
import Phone4 from "@/app/components0/countries/Phone4"
import Mentor1 from "./select/Mentor1"
import Mentor2 from "./select/Mentor2"


const Author = () => {
   const [selectedCountry, setSelectedCountry] =
   useState<{label: string; value:string} | null>(null);

   const [CountryCode, setCountryCode] =
   useState<{label: string; value:string} | null>(null);

  const handleCountryCode = (option: {label: string; value: string}) =>
  {
     setCountryCode(option);
  };

  const handleCountrySelect = (option: {label: string; value: string}) =>
  {
     setSelectedCountry(option);
  };



  return (
    <div className="flex flex-col py-32  bg-orange-500 border-4 border-black">

      <div className='flex justify-center'>
        <h1 className="text-3xl max-sm:text-xl text-black mt-5 mb-5 font-bold ">
            verify your self as a Teacher/Mentor</h1>
      </div>
      <div className='flex justify-center '>
        <h1 className="max-w-3xl h-auto m-3 text-xl text-black mt-5 mb-5 font-bold
        border-4 border-black p-3 ">
          please fill the form below, this will help us to verify your ability and your skills, 
          in order to verify your ability to teach/mentor others and all of our 
          users both
           on mobile and website,
          if you fullfil our requirement below you can start teaching/mentoring others with your 
          skills knowledge among others,  and  generate revenue from 
          your readers and audience,  and also you can visit our <Link href={{pathname:'/privacy'}}
          className="text-blue-900">privacy policy</Link> for more information about 
          monetization and  all about 
          this platform thanks for your support. 
          </h1>
      </div>

      <div className='flex justify-center '>
        <h1 className="max-w-xl h-auto m-3 text-xl text-black mt-5 mb-10 font-bold
        border-4 border-black p-3 ">
         Note: this page is for all who need to guid and mentor others to the
         specific or complex knowledge, idea skills to improve their life, 
         and day to day activities, please provide more details below in order to 
         know and spread your work everywhere in this platform thanks for your 
         helping and mentoring others. 
          </h1>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white max-sm:m-2
          '
         >  <Countries4 onSelect={handleCountrySelect} /> </button>
      </div>
      
      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
          border-4 border-slate-950  text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='your full name'  />
      </div>

      <div className='flex justify-center'>
         <input type='email' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950  text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='your email address'  />
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-14 mt-5  text-xl 
         bg-white text-left  max-sm:m-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
          <input type='number' className='pt-2
            text-xl focus:outline-none  pl-2'
         placeholder='phone number'  />  
       <button className='w-auto   h-9   rounded 
        text-black'> <Phone4 onSelect={handleCountryCode} /> </button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center'>
         <input type='date' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950   text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='date of birth'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
          border-4 border-slate-950  text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='full address '  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='your qualification'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='your profession'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='your experience'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='
         write a description about what you need to teach/mentor people in this platform '  />
         
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='  
          how your content can help others '  />
      </div>

      
      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='write or past link of your  website or social media accounts if you have  
           optional '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-64 p-2 mt-5
           border-4 border-slate-950 text-xl
          focus:outline-none focus:ring  focus:ring-slate-950'
         placeholder='write short and concise note about your self '  />
      </div>


      <div className='flex justify-center'>
         <div className='flex flex-col lg:w-1/3  max-lg:w-2/4 max-md:w-5/6 mt-2 gap-10 font-bold 
               sm:p-10 max-sm:p-5 '>

              <Link href={{pathname:'/Author'}}>
              <button type='button' className='w-full   bg-black text-white h-10
              rounded-2xl  hover:bg-violet-950 '>take a short video</button></Link>

             <Link href={{pathname:'/Other_useful'}}>
             <button type='button' className='w-full   bg-black text-white h-10
             rounded-2xl  hover:bg-violet-950 '>verify number and email</button></Link>

           
     </div>
     </div>



      
    </div>
  )
}

export default Author