"use client";

import React, { useState } from "react";
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Gradient Graphic T-shirt", image: "/image/Frame 4.png", size: "Large", color: "White", price: 145, quantity: 1 },
    { id: 2, name: "Checkered Shirt", image: "/image/Frame 34.png", size: "Medium", color: "Red", price: 180, quantity: 1 },
    { id: 3, name: "Skinny Fit Jeans", image: "/image/Frame 33.png", size: "Large", color: "Blue", price: 240, quantity: 1 },
  ]);

  const discountPercentage: number = 20;
  const deliveryFee: number = 15;

  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const deleteItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const subtotal: number = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  const discount: number = (subtotal * discountPercentage) / 100;
  const total: number = subtotal - discount + deliveryFee;

  return (
    <div className="p-4 lg:p-8 animate-slideBottom">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 relative">
                <button
                  className="absolute top-2 right-2 text-red-500 text-lg -mt-6"
                  onClick={() => deleteItem(item.id)}
                >
                  <Image
                    src="/image/delete.png"
                    alt="delete"
                    width={20}
                    height={15}
                  />
                </button>
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size}, Color: {item.color}
                    </p>
                    <p className="text-lg font-bold">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 lg:mt-8">
                  <button
                    className="px-2 py-1 text-lg bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount ({discountPercentage}%)</span>
              <span className="text-red-500">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button className="w-full bg-black text-white py-2 rounded-md">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
