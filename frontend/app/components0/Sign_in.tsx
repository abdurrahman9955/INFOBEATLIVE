'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Select8 from './Select/Select8'
import Phone6 from './countries/Phone6'



const Sign_In = () => {
    const [signUpOption, setSignUpOption] = useState('email');
    const [CountryCode, setCountryCode] =
   useState<{label: string; value:string} | null>(null);

  const handleCountryCode = (option: {label: string; value: string}) =>
  {
     setCountryCode(option);
  };
    const handleOptionChange = (option:any) => {
      setSignUpOption(option);
    }

  return (
    <div className='bg-lime-500  min-h-screen border-2 border-purple-950 font-bold' >
      <div >
        <h1 className='flex justify-center text-xl text-slate-950 mt-10 '>sign in with</h1>
      </div >
       
      <div className='flex justify-center '>
      <div className='flex flex-row '>
      <button onClick={() => handleOptionChange('email')}
           className='h-8 w-auto px-2 bg-white mt-2 text-sm text-black
           border-2 border-slate-950 hover:bg-yellow-200
           rounded-l-xl'> email</button>

          <button onClick={() => handleOptionChange('phone')}
          className='h-8 w-auto px-2 bg-white mt-2 text-sm text-black
          border-2 border-slate-950 hover:bg-yellow-200
          rounded-r-xl'>phone</button>
        </div>
      </div>

      <div className='flex justify-center '>

        {signUpOption === 'email' && <input type='email' className=' h-8 p-1
          mt-5 border-2 border-slate-950 lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          focus:outline  max-sm:m-2  bg-white text-sm'
         placeholder='enter your email'  />}

       {signUpOption === 'phone' && 

       <input type='number' className=' h-8 p-2
       mt-5 border-2 border-slate-950 lg:w-1/3 max-lg:w-2/4 max-sm:w-full
       focus:outline  max-sm:m-2  bg-white text-sm'
       placeholder='enter your phone number'  />
       
      
        }
     
      </div>
      
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-11 mt-5  text-sm 
          bg-white text-left  max-sm:m-2  hidden
         border-2 border-slate-950'>
           <h1 className='flex justify-between '>
           <input type='number' className='pt-1
             text-sm focus:outline-none  pl-2'
          placeholder='phone number'  />  
        <button className='w-auto   h-8   rounded 
         text-black'><Phone6 onSelect={handleCountryCode} /></button>
        </h1>
       </span>

      <div className='flex justify-center'>
         <input type='password' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          h-8 max-sm:m-2
          p-1 mt-5 border-2 border-slate-950 
          focus:outline    bg-white text-sm'
         placeholder='enter your password'  />
      </div>

      
     
      <div className='flex justify-center mt-3'>
         <input type='checkbox' className=' mr-2 h-4 w-4' />
         <p className='text-sm'>i agree with terms and condition </p>
      </div>

     
       <div className='flex justify-center '>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm hidden
      hover:bg-blue-950 rounded-sm mt-2  '>sign in</button>
      </div>

      {signUpOption === 'email' && <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm
      hover:bg-blue-950 rounded-sm mt-2  '>sign in</button>
      </div>}

       {signUpOption === 'phone' && 
       
       <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-green-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm
      hover:bg-blue-950 rounded-sm mt-2  '>sign in</button>
      </div>
        }


      
      <div className='flex justify-center'>
       <Link href={{pathname: '/Sign_up'}}> <p className='text-sm mr-20 mt-1'>
        you have no an account? <span className='text-blue-950 text-lg font-bold
        '>signUp</span></p> </Link>
      </div>

      <div className='flex justify-center'>
       <Link href={{pathname: '/Sign_in/Forgot_Password'}}> <p className='text-sm  mt-5'>
         <span className='text-blue-950 text-lg font-bold
        '>forgot password ?</span></p> </Link>
      </div>

      <div className='flex justify-center  mb-10 md:mt-3 '>
    <div className='flex flex-col'>
    <div className='  border-2 border-blue-950 
     h-auto w-auto lg:px-5 p-2'>
    

    <div className='flex flex-col justify-between '>
    <div className='flex justify-center mb-3 mt-3  text-sm'>
    <button type='submit' className='flex flex-row bg-white h-auto  w-64
   hover:bg-yellow-100 border-2 border-blue-950  max-sm:text-sm '>
   
    <Image src="/google2.png" alt='/logo ' 
    width={30}
    height={30}
    className='m-1'
     />
<h1 className='text-lime-600 text-sm mt-1 
    '>Continue  </h1>
     <h1 className='text-red-600 text-sm mt-1  ml-1
    '>with  </h1>
   <Image src="/google.png" alt='/logo ' className='mt-2 ml-2'
 width={50}
 height={50} />
 </button>
</div>

<div className='flex justify-center m-3  text-sm'>
<button type='button' className='flex flex-row bg-white h-auto  w-64
  hover:bg-yellow-200 border-2 border-blue-950 max-sm:text-sm'>
 <Image src="/facebook2.png" alt='/logo ' 
 width={30}
 height={30} className=''/> 
  <h1 className='text-green-600 text-sm mt-1 ml-1
    '>Continue  </h1>
     <h1 className='text-yellow-600 text-sm mt-1 ml-1
    '>with  </h1>
  <h1 className='text-blue-950 text-sm mt-1 ml-1'>facebook</h1>
  </button>
   </div>


        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Sign_In
        