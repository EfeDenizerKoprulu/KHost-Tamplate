import React from "react";
import { OptimizeWebsiteSectionData } from "../../Data";

const OptimizeWebsiteSection = () => {
  return (
    <section className="py-20">
      <div className="items-center justify-center flex flex-col gap-3">
        <h2 className="text-3xl font-inter font-bold md:w-[20em] text-center w-[13em]">
          Our Tools And Services For Optimize Website Building
        </h2>
        <p className="text-slate-500 md:w-[40em] text-center w-[20em] my-4">
          {" "}
          Uniquely repurpose strategic core competencies with progressive
          content. Assertively transition ethical imperatives and collaborative
          manufactured products.{" "}
        </p>
      </div>
     <div className="w-3/4 mx-auto my-12">
     <div className="flex flex-wrap w-full gap-5 justify-center">
        {OptimizeWebsiteSectionData.map((item)=>(
          <div key={item.id} className="bg-[#FAFAFA] p-9 shadow-sm w-fit relative">
            <h3 className="text-l">{item.smallTitle.toUpperCase()}</h3>
            <h2 className="text-2xl font-bold -mt-1">{item.Title}</h2>
            <span className="absolute top-12 right-12 text-[#0948B3] text-5xl">{item.Icon}</span>
            <p className="md:w-[32em] my-6 w-[20em] text-slate-600">{item.Content}</p>
            <button className="text-center p-3 font-semibold text-sm text-[#0948b3]  border-[#094883] border-[1px] hover:text-white hover:bg-[#0948b3] ease-in duration-150 transition-all">Wiew more details</button>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default OptimizeWebsiteSection;
