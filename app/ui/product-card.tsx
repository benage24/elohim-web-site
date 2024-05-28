'use client';

import { useState } from "react";
import { productCard } from "../lib/definition";
import Image from "next/image";

export default function ProductCard(card:productCard){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
 
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
   
    };
     // Check if card is defined and has the 'image' property
  const containerStyle = { backgroundImage: `url(${card.image_url})` };

 
    const dynamicColor = isHovered ? 'red' : 'blue';
    return(
        <>
        <div>
            
            <div className="relative shadow-sm " >
 
  <div style={containerStyle} className="max-sm:w-[28.5rem]  p-4 mb-4 bg-cover bg-no-repeat  rounded-lg w-96 h-[34rem]" >

  </div>

  {/* <!-- Second card --> */}
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isHovered?'  opacity-55':' opacity-15'} absolute top-0 left-0 bg-black p-4 w-96 h-[34rem] max-sm:w-[28.5rem]    rounded-lg opacity-15`}>

  </div>
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={` ${isHovered?' border border-[#fff] transition-opacity duration-300':' border-none'} space-y-10 absolute top-3 left-3  flex justify-center  flex-col items-center p-4 max-sm:w-[28.5rem]    pt-40 w-[22.2rem] h-[32.5rem]  rounded-lg`} >
            {/* <span className={`text-7xl text-[#FAF1E3] font-bold ${isHovered ? 'text-[#FAF1E3] ' : ' text-[#FAF1E3] mt-60'}  `}>{card.icon}</span> */}
            <p className={`text-3xl font-bold uppercase flex justify-center transition-opacity duration-300    ${isHovered ? 'text-white ' : ' text-white '}`}>- {card.title} -</p>
            <p className= {` ${isHovered?'transition-opacity duration-300 ':'hidden'} text-white text-lg`}>
              {/* {card.description} */}
            </p>

  </div>
</div>


        </div>

{/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Image
      src={card.image_url}
      width={300}
      height={460}
      alt="Image 1"
      className="p-0 rounded-t-lg"
    />
    <div className="p-5">
        <a href="#">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</p>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${card.price}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}




        </>
    )

}