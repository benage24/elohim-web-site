import Image from "next/image";
import NavBar from "./ui/navbar";
import Jumbotron from "./ui/jumbotron";
import AboutUs from "./ui/about-us";
import Product from "./ui/product";

export default function Home() {
    return(
      <>
      <div>
      <NavBar />
      <Jumbotron />
      </div>
      <AboutUs />
   
      <div className="">
      <Product/>
      </div>
      </>
    )
}
