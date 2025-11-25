"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { Play } from "next/font/google";
import { Stack_Sans_Notch } from "next/font/google";
import { MdPeopleAlt } from "react-icons/md";

const roboto = Roboto({
  subsets:["latin"],
  weight:["300", "400","500", "600", "700"]
})

const stack_sans = Stack_Sans_Notch({
    subsets:["latin"],
    weight:["500","600","700",]
})



const Navbar = ()=>{
    return(
        <div>
          <div className="bg-[#1a1716] py-4">
            <div className="max-w-7xl w-full mx-auto px-5">
            <div className="flex justify-between items-center gap-4">
              <div className="lg:w-[40%] w-full flex items-center justify-start
               gap-8">
                <div>
                    <Link href={'/'} className={`${stack_sans.className} text-white font-bold text-xl 
                    text-white uppercase`}>buylance</Link>
                </div>
                <div>
                    <Link href={'/'} className={`${stack_sans.className} font-semibold text-xl uppercase text-white`}>Men</Link>
                </div>

                 <div>
                    <Link href={'/'} className={`${stack_sans.className} font-semibold text-xl uppercase text-white`}>Women</Link>
                </div>
                
              </div>
              <div className="lg:w-[60%] w-full ">
                <input type="text" className="input input-bordered w-full 
                rounded-full" placeholder="search for items and brands"/>
              </div>
              <div className="lg:w-[20%] w-full flex items-center justify-end gap-4">
                <div>
                  <MdPeopleAlt className="text-white text-2xl "/>
                </div>
                <div>
                  <MdPeopleAlt className="text-white text-2xl "/>
                </div>
                <div>
                  <MdPeopleAlt className="text-white text-2xl "/>
                </div>
              </div>
            </div>
          </div>
          </div>

        <div>
           <div className="max-w-7xl w-full mx-auto">
   <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <details>Product</details>
          <ul className="px-[120px]">
            <li><Link href={'/'}>Classic Cotton T-Shirt</Link></li>
            <li><Link href={'/'}>Premium Denim Jeans</Link></li>
            <li><Link href={'/'}>Slim Fit Casual Shirt</Link></li>
            <li><Link href={'/'}>Winter Hoodie Pro</Link></li>
            <li><Link href={'/'}>Elegant Women’s Kurti</Link></li>
            <li><Link href={'/'}>Soft Touch Sweatpants</Link></li>
            <li><Link href={'/'}>Trendy Sports Jacket</Link></li>
            
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl uppercase font-bold">BuyLance</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'}>Home</Link></li>
      <li>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li><Link href={'/'}>Classic Cotton T-Shirt</Link></li>
            <li><Link href={'/'}>Premium Denim Jeans</Link></li>
            <li><Link href={'/'}>Slim Fit Casual Shirt</Link></li>
            <li><Link href={'/'}>Winter Hoodie Pro</Link></li>
            <li><Link href={'/'}>Elegant Women’s Kurti</Link></li>
            <li><Link href={'/'}>Soft Touch Sweatpants</Link></li>
            <li><Link href={'/'}>Trendy Sports Jacket</Link></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
            </div>

        </div>
        </div>
       
        </div>
    )
}

export default Navbar;