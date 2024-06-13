import Image from "next/image";
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
                <hr className=" w-16 mt-4 border-red-600  border-4" />
                <p className=" text-2xl mt-1 font-bold text-red-600">Shop</p>
                <hr className=" w-16 mt-4 border-red-600   border-4" />
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
  



  {/* <!-- More Content --> */}
  {/* <div className="p-8 bg-white text-gray-900">
    <h2 className="text-2xl font-bold mb-4">More Content</h2>
    <p className="text-lg mb-4">This is another content section. You can add as many sections as you need.</p>
  </div> */}

  <div className="relative h-[45rem] max-sm:hidden mt-14 ">
        {/* Red Background Section */}
        <div className="absolute  w-full top-28">
          <div className="relative h-[38rem] ">
            {/* Parallax Effect Section */}
            <div className="relative h-[38rem] overflow-hidden">
              {/* Background Image for Parallax Effect */}
              <div className="absolute inset-0 bg-fixed bg-image-parralax z-0"></div>

              {/* Overlay for Parallax Effect */}
              <div className="absolute inset-0 bg-[#000] bg-opacity-35 z-1"></div>

              {/* Content in the Parallax Section */}
              <div className="relative z-2 flex flex-row space-x-10   p-4 items-center justify-center h-full text-white  font-bold">
                {/* <div className=" flex justify-between space-x-2 ">
                  <BiSolidCoffeeBean className=" text-[#C3A27C] mt-1  " />

                  <p className=" text-[#C3A27C]   ">CUSTOMER TESTIMONIAL</p>
                  <BiSolidCoffeeBean className=" text-[#C3A27C] mt-1  " />
                </div>
                <div>
                  <p className=" text-5xl py-2">WHAT CUSTOMERS SAY?</p>
                </div> */}

                <div className=" text-white  w-1/2 h-96 bg-red-600  rounded shadow-md">
                  erortpotr
                </div>
                <div className=" w-1/2 h-96 bg-white  o pacity-25 rounded shadow-md">

                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute top-6  flex w-full justify-center">
          {/* Image */}
          {/* <img
            src="/cheese.png"
            className="max-sm:w-[15rem] max-sm:h-[15rem] rounded-full"
            alt="Flowbite Logo"
          /> */}
       <div className=" bg-white h-36 w-36 flex justify-center items-center rounded-full">
        
       <Image
      src="/milk-carton-packs-P67QE86-504x1024.png"
      width={70}
      height={460}
      alt="Image 2"
      className="max-sm:w-[15rem] max-sm:h-[15rem] rounded-full"
    />
       </div>
        </div>
      </div>
     


        </div>
    )

}