

const Manage_Channel = () => {
  return (
    <div className='flex flex-col py-32 bg-yellow-500 border-4 border-purple-950 '>
        
       
        <div className="flex justify-center md:text-5xl max-sm:text-2xl text-black
         "><h1 className="font-bold">Manage your channel</h1></div>
         
        <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6
          border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold"> channel name *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none" placeholder="your channel name" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>
         
         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">channel type *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none" placeholder="your channel type" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">purpose of channel *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="purpose of your channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">change</button>  
            </div> 
         </div>
         </div> 

         
         <div className="flex justify-center">
         <div className="   flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">category of  channel *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="category of yur channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">channel link *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="Link of your channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div>
         </div> 

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">channel id *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="channel id" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">channel handle *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="channel handle" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div>
         </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total published *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total published" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total viewers *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total viewers" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total likes *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total likes" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> </div>
         </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total comments *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total comments" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div></div>

         <div className="flex justify-center">
          <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total share *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total share" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">check</button>
             
            </div> 
         </div></div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">watch hours *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="watch hours" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
           
            </div> 
         </div>  </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">current tier *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="current tier" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">upgrade</button>
           
            </div> 
         </div> </div>  

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">your email *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="your email" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">your county *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="your country" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold"> full address *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="your full address" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">phone number *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="your phone number" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">copy write id *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="your copy write id" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">date of birth *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="date of birth" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
          " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">date of join *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="date of join" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
              
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white ml-10 w-2/4 max-md:w-5/6 border-4 border-purple-950 m-4  
         " >
            <div className="border-b-4 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-xl text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1
            border-4 border-black font-bold">total subscribers *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-xl lg:pl-3 font-bold focus:outline-none
             " placeholder="total subscribers" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
             
            </div> 
         </div></div>
        
        

         <div className="flex justify-center text-xl mt-10 text-white">
          <button type="submit" className="w-1/3 max-md:w-3/5 bg-slate-950
          h-10 rounded-full hover:bg-red-800">save your changes </button>
         </div>

   

            <div className="flex justify-center mt-5  ">
              <button type="button" className="text-white bg-orange-950 
              rounded-full w-1/3 py-2  max-md:w-3/5 text-xl
              hover:bg-slate-900 ">delete channel</button>
            </div>

           
            
      </div>
  ) 
}

export default Manage_Channel