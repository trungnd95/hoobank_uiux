import React from 'react'
import { Button, FeatureCard } from '../components'
import { features } from '../constants'

function Business() {
  return (
    <section id="features" className="flex flex-col md:flex-row padding-y">
      <div className="flex-start flex-col flex-1">
        <h2 className="heading2">We do the business. <br className="sm:block hidden" /> We'll handle the money.</h2>
        <p className="paragraph max-w-[470px] mt-5">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button customStyle="mt-10" />
      </div>
      <div className="flex-center flex-col flex-1 ml-0 md:ml-10 mt-10 md:mt-0 relative">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business