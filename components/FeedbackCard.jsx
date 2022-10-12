import Image from 'next/image';
import React from 'react';
import { quotes } from '../public/assets';

function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="flex justify-between flex-col px-8 py-6 rounded-[20px]  max-w-full md:max-w-[33%] feedback-card my-3">
      <Image src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" objectFit="contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-7">
        {content}
      </p>

      <div className="flex flex-row">
        <Image src={img} alt={name} className="w-[48px] h-[48px] rounded-full" objectFit="contain" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard