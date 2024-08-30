'use client'
import Link from "next/link"
import { useState } from "react"
import Countries3 from "@/app/components0/countries/Countries3"
import Phone3 from "@/app/components0/countries/Phone3"
import Useful1 from "./select/Useful1"
import Useful2 from "./select/Useful2"


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
    <div className="flex flex-col py-5  bg-teal-500 border-2 border-black">

      <div className='flex justify-center'>
        <h1 className="text-xl max-sm:text-lg text-black mt-5 mb-5 font-bold ">
          verify your self as an other useful creator</h1>
      </div>
      <div className='flex justify-center '>
        <h1 className="max-w-2xl h-auto m-3 text-sm text-black mt-5 mb-10 font-bold
        border-2 border-black p-1 ">
          please fill the form below, this will help us to verify your ability and your skills 
          in order to publish your content to the public to all of our users both on mobile and website,
          if you fullfil our requirement you can monetize your content to generate revenue from 
          your audience,  and also you can visit our <Link href={{pathname:'/privacy'}}
          className="text-blue-900">privacy policy</Link> for more information about 
          monetization and  all about 
          this platform thanks for your support. 
          </h1>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white max-sm:m-2
          '
         >  <Countries3 onSelect={handleCountrySelect} /> </button>
      </div>
      
      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5 
          border-2 border-slate-950  text-sm
        '
         placeholder='your full name'  />
      </div>

      <div className='flex justify-center'>
         <input type='email' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5
          border-2 border-slate-950  text-sm
         '
         placeholder='your email address'  />
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full h-auto mt-5  text-sm 
         bg-white text-left  max-sm:m-2
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
          <input type='number' className='pt-2
            text-sm focus:outline-none  pl-2'
         placeholder='phone number'  />  
       <button className='w-auto   h-auto  rounded 
        text-black'><Phone3 onSelect={handleCountryCode} /></button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center'>
         <input type='date' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5
          border-2 border-slate-950   text-sm
          '
         placeholder='date of birth'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5
          border-2 border-slate-950  text-sm
         '
         placeholder='full address '  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5
           border-2 border-slate-950 text-sm
          '
         placeholder='your profession'  />
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-8 p-2 mt-5
           border-2 border-slate-950 text-sm
          '
         placeholder='your experience'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-28 p-2 mt-5
           border-2 border-slate-950 text-sm
          '
         placeholder='write description about your content'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-28 p-2 mt-5
           border-2 border-slate-950 text-sm
          '
         placeholder='how can your content can help others'  />
      </div>

      
      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-2 border-slate-950 text-sm
         '
         placeholder='write or past link of your  website or social media accounts if you have,  
           optional '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-3/4 h-64 p-2 mt-5
           border-2 border-slate-950 text-sm
          '
         placeholder='write short and concise note about your self '  />
      </div>


      <div className='flex justify-center'>
         <div className='flex flex-col lg:w-1/3  max-lg:w-2/4 max-md:w-5/6 mt-2 gap-5 font-bold 
               sm:p-5 max-sm:p-5 '>

              <Link href={{pathname:'/Author'}}>
              <button type='button' className='w-full text-xs  bg-black text-white h-7
              rounded-sm  hover:bg-violet-950 '>take a short video</button></Link>

             <Link href={{pathname:'/Other_useful'}}>
             <button type='button' className='w-full text-xs  bg-black text-white h-7
             rounded-sm hover:bg-violet-950 '>verify number and email</button></Link>

           
     </div>
     </div>



      
    </div>
  )
}

export default Author