export default function AboutUs(){
    return(
        <>
         <div className=" flex h-96 bg-[#F7F7F7]">
            <div className=" w-1/2 flex justify-center flex-col space-y-6 pl-48  ">
                <div className=" flex space-x-6 ">
                <hr className=" w-16 mt-4 border-[#2065AE]  border-4" />
                <p className=" text-2xl mt-1 font-bold text-[#2065AE]">A propos de nous</p>
                </div>
                <p className=" text-4xl capitalize">
                    title here
                </p>
                <p className=" flex justify-center">
                    some text here
                    </p>
            </div>
            <div className=" w-1/2  flex justify-center">
            <p className=" text-5xl">Some images here</p>
            </div>
         </div>
        </>
    )
}