import React from 'react'
import Link from 'next/link'
import { CallCenterSectionData } from '../../Data'
import { AiFillMail,AiFillPhone } from "../../icons";
import Image from 'next/image';

const SupportSection = () => {
  return (
<section className="bg-[#0948B3] p-10">
        {CallCenterSectionData.map((item) => (
          <div className="md:flex justify-around items-center" key={item.Id}>
            <div className="text-white gap-3 flex flex-col">
              <h2 className="font-bold md:text-3xl text-2xl md:w-[20em] w-[15em]">{item.Title}</h2>
              <p className="md:w-[39em] w-[21em]">{item.content}</p>
              <div className="flex md:gap-9 gap-4 md:flex-row flex-col">
                <Link href={item.Mail} className="flex items-center">
                  <span className="mr-2 text-orange-400">
                    <AiFillMail />
                  </span>
                  {item.Mail.slice(7)}
                </Link>

                <Link href={item.Phone} className="flex items-center">
                  <span className="mr-2 text-orange-400">
                    <AiFillPhone />
                  </span>
                  {item.Phone.slice(4)}
                </Link>
              </div>
            </div>
            <div className="lg:block relative object-contain h-[250px]  w-[250px] hidden">
              <Image src={item.Image} alt="" fill />
            </div>
          </div>
        ))}
      </section>
  )
}

export default SupportSection