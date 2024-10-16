import Link from "next/link"

const Menu = () => {
  return (
    <nav className="fixed top-10 left-0 px-3  shadow-md z-10 bg-slate-950 
    border-2 border-slate-300  overflow-y-auto text-sm">
        <div className="flex flex-row te " >
                <div className=" overflow-y-auto ">
                <ul className="flex flex-col gap-1  p-2 " >

                 <li ><Link href={{pathname:'/'}}><p>Home</p></Link></li>
                 <li ><Link href={{pathname:'/upload'}}><p>Upload</p></Link></li>
                  <li ><Link href={{pathname:'/Posting'}}><p>Make Post</p></Link></li>

                 <li ><Link href={{pathname:'/Group'}}><p>Group</p></Link></li>
                  <li ><Link href={{pathname:'/Class'}}><p>Class</p></Link></li>
                  <li ><Link href={{pathname:'/bootCamp/create'}}><p>BootCamp</p></Link></li>
                  <li ><Link href={{pathname:'/academy/create'}}><p>Academy</p></Link></li>
                  <li ><Link href={{pathname:'/Post'}}><p>All Posting</p></Link></li>
               
                  <li ><Link href={{pathname:'/Contact'}}><p>contact us</p></Link></li>
                  <li ><Link href={{pathname:'/Feedback'}}><p>Feedback</p></Link></li>
                  <li ><Link href={{pathname:'/SocialMedia'}}><p>About us</p></Link></li>

                  <li ><Link href={{pathname:'/Privacy'}}><p>Privacy</p></Link></li>
                  <li ><Link href={{pathname:'/Terms'}}><p>Terms of use</p></Link></li>
                  <li ><Link href={{pathname:'/Help'}}><p>Help</p></Link></li>
                  
                     </ul>
                  </div>
                  
                 
       </div>
       
    </nav>
  )
}

export default Menu