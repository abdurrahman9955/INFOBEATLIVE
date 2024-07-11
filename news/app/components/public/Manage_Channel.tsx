

const Manage_Channel = () => {
  return (
    <div className='flex flex-col py-5 bg-yellow-500 border-2 border-purple-950 '>
       
      
        <div className="flex justify-center md:text-xl max-sm:text-lg text-black
         "><h1 className="font-bold">Manage your channel</h1></div>
        
        <div className="flex justify-center mt-5">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
          border-2 border-purple-950 m-2 
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 
            lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-1 pr-1  max-sm:mb-10 py-1
            border-2 border-black  pt-3 font-bold"> channel name *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
            m-5 text-sm lg:pl-3 font-bold focus:outline-none" placeholder="your channel name" />
            <button type="button" className="text-black bg-yellow-400 px-2 lg:mt-6 
             rounded-sm max-md:mt-5 text-sm font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>
         
         <div className="flex justify-center">
         <div className=" flex justify-center bg-white w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2  
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">channel type *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
            m-5  text-sm lg:pl-3 font-bold focus:outline-none" placeholder="your channel type" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 text-sm font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">purpose of channel *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="purpose of your channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 text-sm font-bold border- border-gray-500">change</button>  
            </div> 
         </div>
         </div> 

         
         <div className="flex justify-center">
         <div className="   flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2 
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">category of  channel *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="category of yur channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">change</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2 
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">channel link *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="Link of your channel" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div>
         </div> 

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">channel id *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="channel id" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div> 
         </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white w-2/4 max-md:w-full
         border-2 border-purple-950 m-2  
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">channel handle *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="channel handle" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div>
         </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total published *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="total published" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2  
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total viewers *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="total viewers" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total likes *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5 
             " placeholder="total likes" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> </div>
         </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2  
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total comments *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="total comments" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">check</button>  
            </div> 
         </div></div>

         <div className="flex justify-center">
          <div className=" flex justify-center bg-white  w-2/4 max-md:w-full 
          border-2 border-purple-950 m-2 
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total share *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="total share" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">check</button>
             
            </div> 
         </div></div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">watch hours *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="watch hours" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
           
            </div> 
         </div>  </div> 

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white w-2/4 max-md:w-full
         border-2 border-purple-950 m-2 
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">current tier *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="current tier" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm max-md:mt-5 font-bold border- border-gray-500">upgrade</button>
           
            </div> 
         </div> </div>  

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">your email *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="your email" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">your county *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="your country" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className=" flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold"> full address *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="your full address" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">phone number *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="your phone number" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full 
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">copy write id *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="your copy write id" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">copy</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">date of birth *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="date of birth" />
            <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">edit</button>  
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white w-2/4 max-md:w-full
         border-2 border-purple-950 m-2 
          " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">date of join *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="date of join" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
               
            </div> 
         </div> </div>

         <div className="flex justify-center">
         <div className="flex justify-center bg-white  w-2/4 max-md:w-full
         border-2 border-purple-950 m-2  
         " >
            <div className="border-b-2 border-black mt-4 lg:w-full  ml-4 mr-4 mb-4 lg:flex flex-row">
            <label className="text-sm text-black mt-4 pl-3 pr-2  max-sm:mb-10 py-1 pt-3
            border-2 border-black font-bold">total subscribers *</label>
            <input type="text" className="  ml-4 w-3/4 max-md:mt-10 flex-1 lg:pt-6 lg:mt-5 
             text-sm lg:pl-3 font-bold focus:outline-none m-5
             " placeholder="total subscribers" />
             <button type="button" className="text-black bg-yellow-400 px-5 lg:mt-6 
             rounded-sm text-sm max-md:mt-5 font-bold border- border-gray-500">view</button>
            
            </div> 
         </div></div>
        
        

         <div className="flex justify-center text-xs mt-5 text-white">
          <button type="submit" className="w-1/3 max-md:w-3/5 bg-slate-950
          h-7 rounded-sm hover:bg-red-800">save your changes </button>
         </div>

   

            <div className="flex justify-center mt-5  ">
              <button type="button" className="text-white bg-orange-950 
              rounded-sm w-1/3 h-7  max-md:w-3/5 text-xs mb-10
              hover:bg-slate-900 ">delete channel</button>
            </div>

           
            
      </div>
  ) 
}

export default Manage_Channel