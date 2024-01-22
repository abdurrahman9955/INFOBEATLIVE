import Link from "next/link"

const Menu = () => {
  return (
    <nav className="fixed top-16 left-0 px-10  shadow-md z-10 bg-slate-950 
    border-4 border-slate-300  overflow-y-auto text-2xl">
        <div className="flex flex-row te " >
                <div className=" overflow-y-auto ">
                <ul className="flex flex-col gap-4  p-2 " >


                 <li ><Link href={{pathname:'/'}}><p>Home</p></Link></li>
                 <li ><Link href={{pathname:'/upload'}}><p>Upload</p></Link></li>
                  <li ><Link href={{pathname:'/Posting'}}><p>Make Post</p></Link></li>

                 <li ><Link href={{pathname:'/News'}}><p>News</p></Link></li>
                  <li ><Link href={{pathname:'/Blogs'}}><p>Blogs</p></Link></li>
                  <li ><Link href={{pathname:'/public'}}><p>Public</p></Link></li>
                  <li ><Link href={{pathname:'/private'}}><p>Private</p></Link></li>
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