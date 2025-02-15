"use client";
import Image from "next/image";
// import { useSession } from 'next-auth/react'
import Link from "next/link";
import { useState } from "react";
// import Cart from "@/app/cart/page";
import { ShoppingCart } from "lucide-react"
import { Search } from "./Search";
// import { useCart } from "@/app/context/CartContext";
// const { state: cartItems } = useCart();

// // Calculate total quantity
// const totalQuantity = cartItems.items.reduce(
//   (acc, item) => acc + item.quantity,
//   0
// );
// const { data: session } = useSession()
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <div className="bg-black text-white lg:max-w-[1670px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 px-4 py-2 text-sm">
  <p className="text-center ">
  Sign up and get 20% off to your first order. Sign Up Now
           <Link href="/sanity" className="text-white underline pl-1">
            ShopNow
          </Link> </p>
      </div>
      </div>
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-3 bg-white">
        <div className="text-4xl font-bold text-black">SHOP.CO</div>
        <ul className="hidden md:flex gap-8 lg:gap-12 text-sm font-medium text-black">
        <select
  onChange={(e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      window.location.href = selectedValue; 
    }
  }}
>
  <option value="/shop" disabled selected>
    shop
  </option>
  <option value="/shop/Men">Men</option>
  <option value="/">T-shirt</option>
</select>
          <li><Link href="/" className="hover:underline">On Sale</Link></li>
          <li><Link href="/sanity" className="hover:underline">New Arrivals</Link></li>
           <li><Link href="/Brands" className="hover:underline">Brands</Link></li>
        </ul>
        {/* {session?.user? 'ADMIN' && ( */}
        <Link href="/admin" className="text-sm font-medium">
          Admin Dashboard
        </Link>
      {/* )} */}
        {/* <div className="hidden md:flex items-center relative bg-gray-100 text-black py-2 px-4 w-[577px] rounded-r-full  rounded-l-full focus:outline-none">
            <IoSearchOutline/>
          <input
            type="text"
            placeholder="Search for products..."
            className=" bg-gray-100 pl-4"
          />
        </div> */}
        <div   className="hidden md:flex items-center relative text-black py-2 px-4 w-[577px] "><Search/></div>
        <div className="flex items-center gap-4">
          {/* <Cart/> */}
          {/* <div className="relative"> */}
        {/* <Image
          src="/image/cart-icon.png" // Replace with your cart icon image path
          alt="Cart"
          width={32}
          height={32}
        />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
      </div> */}
      
          <Link href="/cart"> 
          <ShoppingCart className="h-6 w-6 -mt-1 text-black" />
          </Link>
          <Link href="#"> <button>
          <Image src="/image/Frame (1).png" alt="wishlist" width={24

            } height={24} />
          </button></Link>
        </div>
        <button
          className="md:hidden text-xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden bg-white text-black p-4">
          <ul className="flex flex-col gap-4">
        <select
  onChange={(e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      window.location.href = selectedValue; 
    }
  }}
>
  <option value="/shop" disabled selected>
    shop
  </option>
  <option value="/shop/Men">Men</option>
  <option value="/">T-shirt</option>
</select>
          <li><Link href="/" className="hover:underline">On Sale</Link></li>
          <li><Link href="/sanity" className="hover:underline">New Arrivals</Link></li>
           <li><Link href="/Brands" className="hover:underline">Brands</Link></li>
          </ul>
          {/* <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-black py-2 px-4 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-gray-100 text-black px-3 py-2 rounded-r-md">
              <IoSearchOutline/>
            </button>
          </div> */}
         <div className="flex items-center mt-4"> <Search /></div>
        </div>
      )}
 <div className="border-b-2  bg-gray-400 mx-20 mb-5"></div>
</div>
  )}