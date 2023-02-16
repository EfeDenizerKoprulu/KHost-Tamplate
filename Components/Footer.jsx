import {
  AiFillFacebook,
  BsTwitter,
  FaInstagramSquare,
  AiFillYoutube,
  AiFillLinkedin,
} from "../icons";
import React from "react";
import {
  FooterCompanyData,
  FooterProductsData,
  FooterResourcesData,
  FooterSupportData,
} from "../Data";

const Footer = () => {
  return (
    <>
      <footer className="gradient py-12 lg:px-60 px-10 w-full h-fit text-white gap-24 lg:flex flex-wrap">
        <div className="flex-col gap-2 flex">
          <span className="font-bold text-2xl italic">EDKTamplate</span>
          <p className="w-[26em] text-sm text-slate-200">
            {" "}
            Dynamically re-engineer high standards in functiona with alternative
            paradigms. Conveniently monetize resource maximizing initiatives.{" "}
          </p>
          <div className="flex gap-2 text-[18px] opacity-70">
            <span className="social-media-icons bg-[#1da1f2]">
              <BsTwitter />
            </span>
            <span className="social-media-icons bg-[#cd201f]">
              <AiFillYoutube />
            </span>
            <span className="social-media-icons bg-[#0077b5]">
              <AiFillLinkedin />
            </span>
            <span className="social-media-icons bg-blue-500">
              <AiFillFacebook />
            </span>
            <span className="social-media-icons bg-[#ea4c89]">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
        <div className="lg:mt-0 mt-8 flex-wrap flex gap-24">
          {" "}
          <div className=" flex flex-col gap-3">
            <h3 className="font-bold text-xl">Resources</h3>
            <ul className="flex flex-col gap-2">
              {FooterResourcesData.map((item) => (
                <li
                  className="cursor-pointer opacity-70 hover:opacity-100"
                  key={item.Id}
                >
                  {item.ItemName}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className="font-bold text-xl">Products</h3>
            <ul className="flex flex-col gap-2">
              {FooterProductsData.map((item) => (
                <li
                  className="cursor-pointer opacity-70 hover:opacity-100"
                  key={item.Id}
                >
                  {item.ItemName}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className="font-bold text-xl">Company</h3>
            <ul className="flex flex-col gap-2">
              {FooterCompanyData.map((item) => (
                <li
                  className="cursor-pointer opacity-70 hover:opacity-100"
                  key={item.Id}
                >
                  {item.ItemName}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className="font-bold text-xl">Support</h3>
            <ul className="flex flex-col gap-2">
              {FooterSupportData.map((item) => (
                <li
                  className="cursor-pointer opacity-70 hover:opacity-100"
                  key={item.Id}
                >
                  {item.ItemName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>{" "}
      <div className="bg-slate-200 bg-opacity-60 p-2">
        <p className="text-slate-600">@ Tüm Hakları Saklıdır ve EDK Software tarafından yapılmıştır</p>
      </div>
    </>
  );
};

export default Footer;
