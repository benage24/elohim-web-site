'use client';
import { useState } from "react";
import ProductCard from "./product-card";
export default function Product(){
    // const [cards,setCard]=useState([productList])
    const productList=
    [
        {
          title: 'Product 1',
          price:20,
          description: 'This is a description of product 1.',
          image: '/sausage.jpg',
          tags: ['tag1', 'tag2', 'tag3'],
        },
        {
          title: 'Product 2',
          price:10,
          description: 'This is a description of product 2.',
          image:'/cheese.jpg',
          tags: ['tag1', 'tag2', 'tag3'],
        },
        {
            title: 'Product 2',
            price:10,
            description: 'This is a description of product 2.',
            image:'/sausage.jpg',
            tags: ['tag1', 'tag2', 'tag3'],
          },
        // Add more products as needed
      ]
    return(
        < div className=" bg-[#F7F7F7">
             <div className=" flex justify-center mt-20 space-x-6 ">
                <hr className=" w-16 mt-4 border-[#2065AE]  border-4" />
                <p className=" text-2xl mt-1 font-bold text-[#2065AE]">Shop</p>
                <hr className=" w-16 mt-4 border-[#2065AE]  border-4" />
                </div>
        <p className=" font-bold text-5xl my-6 p-8 justify-center flex">Nos produits</p>
        <div className="flex justify-center space-x-14">
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
           
            image_url={product.image}
            price={product.price}
           
          />
        ))}
      </div>
      {/* <!-- Parallax Section --> */}
  <div className="parallax"></div>

  {/* <!-- Content Section --> */}
  <div className="p-8 bg-white text-gray-900">
    <h1 className="text-3xl font-bold mb-4">Content Section</h1>
    <p className="text-lg mb-4">This is a content section that follows the parallax section. You can add more content here.</p>
  </div>

  {/* <!-- Another Parallax Section --> */}
  <div className="parallax"></div>

  {/* <!-- More Content --> */}
  <div className="p-8 bg-white text-gray-900">
    <h2 className="text-2xl font-bold mb-4">More Content</h2>
    <p className="text-lg mb-4">This is another content section. You can add as many sections as you need.</p>
  </div>
        </div>
    )

}