import React from 'react';
import { CTA, Navbar } from "./components";
import { Billing, Business, CardDeal, Footer, Hero, Stats, Testimonials } from "./sections";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="padding-x flex-center">
        <div className="box-w">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex-start">
        <div className="box-w">
          <Hero />
        </div>
      </div>

      <div className="bg-primary flex-start padding-x">
        <div className="box-w">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App