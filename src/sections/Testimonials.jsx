import React from 'react';
import { FeedbackCard } from '../components';
import { feedback } from '../constants';

function Testimonials() {
  return (
    <section id="clients" className="flex flex-center flex-col padding-y relative">
      <div className="w-full flex-justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z[1]">
        <h1 className="heading2">What people are <br className="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className="paragrah text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials