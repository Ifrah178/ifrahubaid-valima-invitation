"use client";
import Image from "next/image";
import AnimatedPopup from "../../components/animated-popup";

export default function Home(){
  return(
    <>
    <div className="">

    <AnimatedPopup animationType="bounce">
    <div className="heading">
      <h1>أهْلاً وَسَهْلاً وَمَرْحَباً بِكُمْ</h1>
    </div>
    </AnimatedPopup>

    <AnimatedPopup animationType="popup">
    <video controls width="100%" poster="/invitation-thumbnail.jpg">
        <source src="/invitation-video.mp4" type="video/mp4" />
    </video>
    </AnimatedPopup>

    </div>
    </>
  );
}


{/* 
      { <Image src="/11.png" alt="you" className="hero-image"/> }
      <img
      src="/1.png" 
      alt="My Image" 
      />
    <img
      src="/2.png" 
      alt="My Image" 
      />
      <img
      src="/3.png" 
      alt="My Image" 
      />
      <img
      src="/4.png" 
      alt="My Image" 
      />
      <img
      src="/5.png" 
      alt="My Image" 
      />
      <img
      src="/6.png" 
      alt="My Image" 
      />
      <img
      src="/7.png" 
      alt="My Image" 
      />
      <img
      src="/8.png" 
      alt="My Image" 
      />
      <img
      src="/9.png" 
      alt="My Image" 
      />
 } */}



      {/* <Image src="/2.png" alt="you" className="hero-image"/>
      <Image src="/3.png" alt="you" className="hero-image"/>
      <Image src="/4.png" alt="you" className="hero-image"/>
      <Image src="/5.png" alt="you" className="hero-image"/>
      <Image src="/6.png" alt="you" className="hero-image"/>
      <Image src="/7.png" alt="you" className="hero-image"/>
      <Image src="/8.png" alt="you" className="hero-image"/>
      <Image src="/9.png" alt="you" className="hero-image"/> */}
      
{/* <div>      <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
</div> */}


      {/* <p className="mid-heading">
        <i><b>"YOU'RE INVITED"</b></i>
      </p> */}

      {/* <Image src="/3.png" alt="3" width={600} height={600}/>;
      <Image src="/4.png" alt="4" width={600} height={600}/>;
      <Image src="/5.png" alt="5" width={600} height={600}/>;<Image src="/6.png" alt="6" width={600} height={600}/>;
      <Image src="/7.png" alt="7" width={600} height={600}/>;
      <Image src="/8.png" alt="8" width={600} height={600}/>;
        */}
  
   
