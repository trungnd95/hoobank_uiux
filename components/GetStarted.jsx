import Image from 'next/image'
import React from 'react'
import { arrowUp } from '../public/assets'

function GetStarted() {
  return (
    <div className="flex-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
        <div className="w-full h-full group rounded-full bg-primary flex-col flex-center hover:bg-gradient-to-r hover:from-[#33bbcf] hover:text-primary">
            <div className="flex-row flex-start">
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Get</span>
                </p>
                <Image src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain ml-2" />
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted