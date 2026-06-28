'use client';

import Experience from "@/components/experiences";
import Footer from "@/components/footer";
import Github from "@/components/github";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Stacks from "@/components/stacks";
// import ImageMouseTrail from "@/components/ui/mousetrail";

// const trailImages = [
//   'https://res.cloudinary.com/dkf0wnti1/image/upload/v1781186231/s5_fgkqkn.jpg',
//   'https://res.cloudinary.com/dkf0wnti1/image/upload/v1781186194/s1_jtvpbr.jpg',
//   'https://res.cloudinary.com/dkf0wnti1/image/upload/v1781186211/s3_xuvorp.jpg',
//   'https://res.cloudinary.com/dkf0wnti1/image/upload/v1781186225/s4_inyvl9.jpg',
//   'https://res.cloudinary.com/dkf0wnti1/image/upload/v1781186204/s2_eqmt5x.jpg',
  
// ];

export default function Home() {
  return (
    <div> 
    {/* <ImageMouseTrail
      items={trailImages}
      maxNumberOfImages={5}
      distance={50}
      imgClass="w-20 h-25 sm:w-20 sm:h-30 rounded-lg object-cover opacity-80"
      fadeAnimation={true}
    > */}
        <Navbar />
        <Introduction />
        <Stacks />
        <Experience />
        <Github />
        <Footer/>
    {/* </ImageMouseTrail> */}
      </div>
  );
}