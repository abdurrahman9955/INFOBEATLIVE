'use client'
import React, { useState }  from "react"
import Link from "next/link"
import Select3 from "@/app/components0/Select/Select3"




const CreateGroup = () => {

  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-lime-500 border-2 border-black 
     '>

      <div className="flex justify-center   text-xl text-white font-normal"> 
      <p className=" bg-lime-700 rounded-lg p-2 px-10  ">crate your group here </p></div>

     <div className="flex justify-center text-sm text-black font-bold mt-5 mb-5 ">
       <h1 className="max-w-3xl rounded h-auto  p-5 m-1 text-white
       bg-gradient-to-b from-lime-600 to-cyan-500
       ">
     
      <h1 className=" bg-lime-700 rounded-lg p-5  font-normal">
       <p className="text-lg">Group Creation Guidelines </p> </h1>

       <h1 className=" bg-lime-700 rounded-lg p-5 mt-2 font-normal">
       <p className="text-lg">Content Restrictions: </p>
       <p className="mt-2">
       Users are strictly prohibited from uploading nude or explicit videos, or 
       any content related to criminal activities. Groups must not contain or 
       promote explicit content or any form of illegal activities.
       </p> </h1>

       <h1 className=" bg-lime-700 rounded-lg p-5 mt-2 font-normal">
       <p className="text-lg">Purpose and Membership: </p>
       <p className="mt-2">
       Groups should be created by professional entities such as student groups, 
       company staff, organizations, or similar. The primary purpose of these 
       groups should be for educational, professional, or organizational activities.
       </p> </h1>

       <h1 className=" bg-lime-700 rounded-lg p-5 mt-2 font-normal">
       <p className="text-lg">Compliance: </p>
       <p className="mt-2">
       All group content must comply with our platform's terms of service and community
       guidelines. Any violation of these guidelines will result in appropriate action,
       including potential removal of the group and banning of users involved.
       </p> </h1>

      <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
      <h1 className="text-lg">Group Activities:</h1> This group is exclusive and 
      not accessible to everyone on this platform. Only individuals you grant 
      permission to can join. To add members, click on the "Members" button on 
      the next page and select whom you wish to include. You also have the option
      to promote members to admin status by clicking the "Admin" button. </p>

       <p className="mt-2 bg-lime-700 rounded-lg p-5  font-normal">
      <h1 className="text-lg">Additional note:</h1> Please note, members cannot
       comment, post, or perform any tasks without your explicit permission or 
       that of another admin. You can initiate video calls, group calls, or chats 
       with all your members. Additionally, you and your members can share posts, 
       including videos and photos. </p>

      <p className="mt-2 mb-3 bg-lime-700 rounded-lg p-5  font-normal">
      We strive to maintain a safe and respectful environment for all our users. 
      Thank you for your cooperation. </p> 
      </h1></div>


        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
          border-2 border-slate-950   bg-white rounded-lg'
          placeholder='your group name'  />
        </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-1 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm   bg-white rounded-lg
           '
         placeholder='purpose of your group'  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-40 p-1 mt-5
           border-2 border-slate-950 text-sm     bg-white rounded-xl
          '
         placeholder='rules of your group '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm      bg-white rounded-xl
          '
         placeholder='write the description about your group '  />
      </div>
      
      <Link href={{pathname:'/Group/home'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-5'>validate group</button>
      </div></Link>
       
      <Link href={{pathname:'/Group/home'}}>
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>create group
      </button>  
      </div></Link>
      
      

    </div>
  )
}

export default CreateGroup