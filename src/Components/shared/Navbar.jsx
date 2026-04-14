"use client"

import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/logo.png'
import { usePathname } from "next/navigation"
import { IoHomeOutline } from "react-icons/io5"
import { RiTimeLine } from "react-icons/ri"
import { GoGraph } from "react-icons/go"

const Navbar = () => {
 const path = usePathname()
    const links =<>
    <li><Link href='/' className={path === '/' ? 'bg-green-900 rounded text-white': null}><IoHomeOutline /> Home</Link></li>
    <li><Link href='/Timeline' className={path === '/Timeline' ? 'bg-green-900 rounded text-white': null}> <RiTimeLine /> Timeline</Link></li>
    <li><Link href='/Static' className={path === '/Static' ? 'bg-green-900 rounded text-white': null}><GoGraph /> Static</Link></li>
    </>
  return (
 <>
   <div className="shadow-sm">
     <div className="navbar bg-base-100  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
         {links}
      </ul>
    </div>
    <Link href='/'><Image src={logo} width={140} alt='keen-keeper'/></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
           {links}
    </ul>
  </div>

</div>
   </div>
 </>
  )
}

export default Navbar