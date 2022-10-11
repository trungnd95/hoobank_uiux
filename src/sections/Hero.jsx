import React from 'react';
import { discount, robot } from "../assets";
import { GetStarted } from '../components';

function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row padding-y">
        <div className="flex-col flex-start flex-1 xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row items-center px-4 py-[6px] bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                <p className="paragraph ml-2">
                    <span className="text-white">20%</span> Discount For {" "}
                    <span className="text-white">1 Month</span> Account
                </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Next <br className="sm:block hidden" /> {" "}
                    <span className="text-gradient">Generation</span> {" "}
                </h1>
                <div className="hidden ss:flex mr-0 md:mr-4">
                    <GetStarted />
                </div>
            </div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                Payment Method
            </h1>
            <p className="paragraph max-w-[470px] mt-5">Our team of experts uses a methodology to identity the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>
        <div className="flex-center flex-1 md:my-0 my-2 relative">
            <img src={robot} alt="billing" className="w-full h-full relative z-[5]"/>
            <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className="ss:hidden flex-center">
            <GetStarted />
        </div>
    </section>
  )
}

export default Hero