"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { Stack_Sans_Notch } from "next/font/google";

import { FiUser, FiShoppingBag, FiLogIn } from "react-icons/fi";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const stack_sans = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Navbar = () => {
  return (
    <div className="w-full">

      
      <div className="bg-[#1a1716] py-4 shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-5">
          <div className="flex justify-between items-center gap-6">

          
            <div className="lg:w-[35%] w-full flex items-center gap-3">
              <Link
                href="/"
                className={`${stack_sans.className} text-white font-bold text-sm uppercase tracking-wide`}
              >
                Buylance
              </Link>

              <Link
                href="/"
                className={`${stack_sans.className} font-semibold text-sm uppercase text-white hover:text-gray-300 transition`}
              >
                Men
              </Link>

              <Link
                href="/"
                className={`${stack_sans.className} font-semibold text-sm uppercase text-white hover:text-gray-300 transition`}
              >
                Women
              </Link>
            </div>

            
            <div className="lg:w-[45%] w-full">
              <input
                type="text"
                className="input input-bordered w-full rounded-full px-5 py-2 text-sm bg-white/95"
                placeholder="Search for items and brands..."
              />
            </div>

           
            <div className="lg:w-[20%] w-full flex justify-end items-center gap-6">
              <FiUser className="text-white text-[26px] cursor-pointer hover:text-gray-300 transition" />
              <FiLogIn className="text-white text-[26px] cursor-pointer hover:text-gray-300 transition" />
              <FiShoppingBag className="text-white text-[26px] cursor-pointer hover:text-gray-300 transition" />
            </div>

          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto w-full">
        <div className="navbar bg-base-100 rounded-b-xl px-4">

          
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 rounded-box shadow-xl z-20"
              >
                <li><Link href="/">Home</Link></li>

                <li>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                      <li><Link href="/">Classic Cotton T-Shirt</Link></li>
                      <li><Link href="/">Premium Denim Jeans</Link></li>
                      <li><Link href="/">Slim Fit Casual Shirt</Link></li>
                      <li><Link href="/">Winter Hoodie Pro</Link></li>
                      <li><Link href="/">Elegant Women’s Kurti</Link></li>
                      <li><Link href="/">Soft Touch Sweatpants</Link></li>
                      <li><Link href="/">Trendy Sports Jacket</Link></li>
                    </ul>
                  </details>
                </li>

                <li><Link href="/">Shop</Link></li>
                <li><Link href="/">Service</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>

            <span className=" text-2xl text-orange-500 uppercase font-bold tracking-wide">
              Buylance
            </span>
          </div>

         
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li><Link href="/">Home</Link></li>

              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2 w-52">
                    <li><Link href="/">Classic Cotton T-Shirt</Link></li>
                    <li><Link href="/">Premium Denim Jeans</Link></li>
                    <li><Link href="/">Slim Fit Casual Shirt</Link></li>
                    <li><Link href="/">Winter Hoodie Pro</Link></li>
                    <li><Link href="/">Elegant Women’s Kurti</Link></li>
                    <li><Link href="/">Soft Touch Sweatpants</Link></li>
                    <li><Link href="/">Trendy Sports Jacket</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link href="/">Shop</Link></li>
              <li><Link href="/">Service</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>

          <div className="navbar-end">
            <button className="btn btn-neutral rounded-full px-6">Shop Now</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;
