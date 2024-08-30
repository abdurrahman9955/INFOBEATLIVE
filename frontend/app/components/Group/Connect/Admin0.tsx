import React from 'react'


const Admin0 = () => {
  return (
    <div className='flex justify-center flex-col  pt-5 w-full font-bold '>
        
         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-3/4 font-bold 
         bg-white border-2 border-slate-950 pt-2 max-md:w-11/12   md:text-sm '> 

              <div className="flex justify-center w-11/12 ml-3 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-11/12 bg-lime-500 border  h-7
                border-slate-950 rounded flex-initial">
                 
                   <h1 className='flex justify-center font-bold text-black mt-1
                   text-sm'>Connect to admins here</h1>
                </div>
                </div>
                
                <div className='w-full mt-1  border-b-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-1'>
         <div className='  w-full gap-2 '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Admin0