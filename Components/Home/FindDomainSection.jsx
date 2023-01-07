import Image from "next/image";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HomeOneImg } from "../../img";
import { FindDomainCardData } from "../../Data";

const FindDomainSection = () => {
  return (
    <section className=" h-fit w-full">
      {/** image */}
      <div className="bg-[#0948B3] lg:md:flex justify-around md:pt-12 lg:pt-6 pt-7 h-[41em] items-center ">
        <div className=" flex flex-col text-white gap-4 md:pt-0 lg:mx-24 md: mx-16">
          <h2 className="lg:text-4xl md:text-3xl font-serif  font-bold lg:w-[16em] text-3xl lg:px-0 ">
            Unlimited Domain & Hosting in One Platform
          </h2>
          <p className="font-serif text-xl lg:w-[25em] md:w-full">
            A ton of website hosting options, 99.9% uptime guarantee, free SSL
            certificate, easy WordPress installs.
          </p>
          <button className="font-semibold py-3 px-6 w-[12em] text-[16px] text-center bg-[#f67a3c] rounded-md items-center mt-5 md:mt">
            Get started now
          </button>
        </div>
        <div className="relative object-contain lg:object-left lg:w-[38em] lg:h-[34em] w-[20em] h-[16em] md:w-[35em] md:h-[30em] mt-8 md:mt-8 mx-auto md:left-0">
          <Image src={HomeOneImg} alt="section 1" fill />
        </div>
      </div>

      {/* bar  */}
      <div className="bg-[#FAFAFA] md:px-24 md:py-10 py-6 px-6 md:relative md:bottom-16 md:w-fit rounded-2xl text-center mx-auto gap-5 shadow-sm ">
        <h2 className="font-bold text-2xl font-serif mb-7 tracking-normal">Looking For Domain Name?</h2>
        <div className="flex gap-3 flex-wrap">
          <input type="text" placeholder="YourDomainName.com" className="textDomain lg:md:w-[24em]"/>
          <input type="text" className="textDomain  w-[8em]" placeholder=".com"/>
          <button className="bg-[#0948B3] text-white py-3 px-16 text-center rounded-md flex items-center font-semibold text-sm hover:bg-[#083d98] transition ease-in-out duration-300 delay-100">
          <span className="mr-2"><BiSearchAlt/></span>
          Search
          </button>
          
        </div>
   
   {/* domain prices */}
   <div className="hidden md:flex items-center justify-center mt-6 gap-3">
    
    {FindDomainCardData.map((item)=> (
      <div key={item.key} className="bg-white py-1 px-3 h-fit">
       <div className="w-[61px] h-[25px] object-cover relative">
       <Image src={item.DomainExtensionImage} alt={item.alt} fill />
       </div>
        <p className="relative bottom-[3px] opacity-60 text-center text-md">{item.PriceText.toUpperCase()}</p>
      </div>
    ))}

   </div>


      </div>
    </section>



  );
};

export default FindDomainSection;
