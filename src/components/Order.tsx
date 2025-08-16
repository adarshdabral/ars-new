"use client";
import React from "react";

// Types
type OrderItem = {
  id: string;
  imageUrl?: string;
  artName: string;
  frameType: string;
};

type Order = {
  id: string;
  date: string; // ISO or formatted, e.g. "Wed, Aug 6"
  items: OrderItem[];
};

const orders: Order[] = [
  {
    id: "775466089",
    date: "Wed, Aug 6",
    items: [
      {
        id: "item1",
        artName: "Name of the Art",
        frameType: "Frame Type",
      },
      {
        id: "item2",
        artName: "Name of the Art",
        frameType: "Frame Type",
      },
    ],
  },
  {
    id: "775643278",
    date: "Sun, Aug 3",
    items: [
      {
        id: "item3",
        artName: "Name of the Art",
        frameType: "Frame Type",
      },
      {
        id: "item4",
        artName: "Name of the Art",
        frameType: "Frame Type",
      },
    ],
  },
];

const Order: React.FC = () => {
  return (
    <div className="pt-8 px-4 sm:px-8 max-w-3xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-serif font-semibold mb-6">My Orders</h1>
      <div className="border-t border-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="py-6 border-b border-gray-100">
            {/* Order header */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="block text-xs text-black/50">Order ID:</span>
                <span className="font-semibold text-sm text-black">{order.id}</span>
              </div>
              <div className="text-xs text-black/60">{order.date}</div>
            </div>
            {/* Order Items */}
            <div className="flex flex-col gap-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  {/* Image Placeholder */}
                  <div className="w-16 h-16 rounded-md bg-gray-200 flex-shrink-0" />
                  {/* Details */}
                  <div>
                    <div className="font-medium text-sm text-black">{item.artName}</div>
                    <div className="text-xs text-black/50 mt-0.5">{item.frameType}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
