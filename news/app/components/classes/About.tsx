

const About = () => {
    return (
      <div className='flex flex-col  bg-orange-00 pt-5 w-full 
       border-8 border-slate-950 h-auto'>
  
               <div className='flex justify-center text-3xl mb-5 font-bold'>
                 <h1>you have (0) Videos</h1>
               </div>
  
          <div className='flex justify-center overflow-x-auto '>
            <div>
              <button className='text-xl text-white w-28 h-10 bg-black mr-2 
              hover:bg-purple-950 rounded-full overflow-visible'>popular</button>
            </div>
  
            <div>
              <button className='text-xl text-white w-28 h-10 bg-black mr-2 
              hover:bg-purple-950 rounded-full'>latest</button>
            </div>
  
            <div>
              <button className='text-xl text-white w-28 h-10 bg-black mr-2 
              hover:bg-purple-950 rounded-full'>oldest</button>
            </div>
  
           
       
        
          </div>
  
         <div className='flex justify-center flex-wrap  border-8 border-black
          h-screen m-3 
         w-5xl overflow-y-auto p-3 gap-4 max-md:m-3 
         '>
             
             <div>
              <h1 className='text-3xl font-bold'>no content upload yet</h1>
             </div>
  
            
         </div>
      </div> 
    )
  }
  
  export default About