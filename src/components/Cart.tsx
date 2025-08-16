"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: "Product Name",
      price: 999,
      quantity: 2,
      image: "/placeholder.png",
    },
    {
      id: 2,
      name: "Product Name",
      price: 799,
      quantity: 1,
      image: "/placeholder.png",
    },
  ]);

  const handleQuantityChange = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 600;
  const delivery = 199;
  const total = subtotal - discount + delivery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8">CART</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Cart Items */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, "dec")}
                    className="w-8 h-8 border rounded-full text-lg"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "inc")}
                    className="w-8 h-8 border rounded-full text-lg"
                  >
                    +
                  </button>
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wishlist */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">YOUR WISHLIST ✨</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border p-2 rounded-lg text-center text-sm"
                >
                  <div className="bg-gray-200 h-24 mb-2 rounded"></div>
                  <p>Product Name</p>
                  <p className="text-blue-600 mt-1">Add to Cart</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">ORDER SUMMARY</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p>DISCOUNT</p>
              <p>₹{discount}</p>
            </div>
            <div className="flex justify-between">
              <p>ORDER VALUE</p>
              <p>₹{subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>DELIVERY FEE</p>
              <p>₹{delivery}</p>
            </div>
            <div className="flex justify-between font-semibold text-base mt-4">
              <p>TOTAL</p>
              <p>₹{total}</p>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 mt-6 rounded-lg hover:opacity-90">
            Proceed to Checkout
          </button>
          <button className="w-full text-blue-600 py-3 mt-2 hover:underline">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
