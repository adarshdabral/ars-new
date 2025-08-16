"use client";

import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  type: string;
  price: number;
};

type Address = {
  id: number;
  name: string;
  fullAddress: string;
};

const Checkout = () => {
  const [cartItems] = useState<CartItem[]>([
    { id: 1, name: "Product Name", type: "Frame type", price: 1200 },
    { id: 2, name: "Product Name", type: "Frame type", price: 1200 },
  ]);

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Name of User",
      fullAddress:
        "Saraswati vihar B-1 Block tiny scholars lane, Dehradun, 248001",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const orderValue = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 199;
  const total = orderValue + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <button className="text-sm text-gray-500 mb-4">&lt; Back to Cart</button>
      <h1 className="text-4xl font-serif font-semibold mb-10">CHECKOUT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Order Summary */}
        <div>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <p className="font-medium">DISCOUNTS</p>
              <button className="text-blue-600 font-semibold">ADD</button>
            </div>
            <div className="flex justify-between text-sm">
              <p>ORDER VALUE</p>
              <p>₹{orderValue}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>DELIVERY FEE <span className="text-xs text-gray-500">(5-7 business days)</span></p>
              <p>₹{deliveryFee}</p>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-4 border-t">
              <p>TOTAL</p>
              <p>₹{total}</p>
            </div>
          </div>

          <h3 className="font-medium mb-4">IN YOUR CART</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
                <p className="ml-auto font-semibold">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Address Selection */}
        <div>
          <h3 className="font-medium mb-4">CHOOSE ADDRESS</h3>

          {/* Add New Address */}
          <div className="border-dashed border-2 p-4 rounded-md mb-4 text-center">
            <button className="text-xl text-blue-600">+</button>
            <p className="text-sm mt-2">Add New Address</p>
          </div>

          {/* Existing Address */}
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`border p-4 mb-4 rounded-md ${
                selectedAddress === address.id
                  ? "border-blue-600"
                  : "border-gray-300"
              }`}
            >
              <p className="font-semibold mb-2">{address.name}</p>
              <p className="text-sm text-gray-600">{address.fullAddress}</p>
              <div className="flex gap-2 mt-3">
                <button className="text-sm underline">Edit</button>
                <button
                  className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm"
                  onClick={() => setSelectedAddress(address.id)}
                >
                  Deliver here
                </button>
              </div>
            </div>
          ))}

          <button
            className="w-full bg-blue-800 text-white py-3 rounded-full mt-6 hover:opacity-90"
            disabled={selectedAddress === null}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
