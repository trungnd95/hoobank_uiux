import React from 'react'
import { card } from '../assets'
import { Button } from '../components'

function CardDeal() {
  return (
    <section className="flex flex-col md:flex-row padding-y">
      <div className="flex-start flex-col flex-1">
        <h2 className="heading2">Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.</h2>
        <p className="paragraph max-w-[470px] mt-5">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button customStyle="mt-10" />
      </div>
      <div className="flex flex-center flex-1 ml-0 md:ml-10 mt-10 md:mt-0 relative">
        <img src={card} alt="card deal" className="w-[100%] h-[100%] object-contain" />
      </div>
    </section>
  )
}

export default CardDeal