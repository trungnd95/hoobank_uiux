import React from 'react'
import { apple, bill, google } from '../assets'

function Billing() {
  return (
    <section id="product" className="flex flex-col-reverse md:flex-row padding-y">
      <div className="flex flex-center flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className="flex flex-start flex-col flex-1">
        <h2 className="heading2">Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className="paragraph max-w-[470px] mt-5">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing