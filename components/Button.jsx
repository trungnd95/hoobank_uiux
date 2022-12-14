import React from 'react'

function Button({customStyle}) {
  return (
    <button type="button" className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] rounded-[10px] ${customStyle}`}>
      Get Started
    </button>
  )
}

export default Button