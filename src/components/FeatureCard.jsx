import React from 'react'

function FeatureCard({icon, title, content, index}) {
  return (
     <div className="flex flex-row p-6 rounded-[20px] mb-0 last-child:mb-6 feature-card">
        <div className="w-[64px] h-[64px] rounded-full flex-center bg-dimBlue">
          <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            {title}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            {content}
          </p>
        </div>
      </div>
  )
}

export default FeatureCard