import React from 'react'
import { NewsEventSectionData } from "../../Data";
import { FaCommentDots,FaUserCircle } from "../../icons";

const NewsEventSection = () => {
  return (
    <section className='bg-[#FAFAFA] w-full h-fit py-24'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold text-3xl '>Recent News and Events</h2>
        <p className='w-[40em] text-center  text-slate-600'> Efficiently matrix robust total linkage after market positioning bandwidth materials rather than brand flexible paradigms vis-a-vis mission-critical e-commerce. </p>
      </div>
      <div className='flex gap-8 flex-wrap justify-center mt-9'>
        {NewsEventSectionData.map((item)=> (
          <div className='bg-white  p-4 shadow-sm shadow-stone-400 cursor-pointer ' key={item.Id}>
            <h3  className='font-bold text-xl'>{item.Title}</h3>
            <span className='text-[13px] text-slate-600'>{item.Date}</span>
            <div className='p-[1px] bg-[#094883] w-32 my-4'></div>
            <p className='w-[22em] text-slate-600'>{item.Content}</p>
            <div className='flex my-6 justify-between'>
              <div className='flex gap-1 items-center text-slate-600 text-sm'><span><FaCommentDots/></span>{item.CommentCount}</div>
              <div className='items-center text-[#094883] text-3xl'><span><FaUserCircle/></span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsEventSection