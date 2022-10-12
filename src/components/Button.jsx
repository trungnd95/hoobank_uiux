import React from 'react'

function Button({customStyle}) {
  return (
    <button type="button" class={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] ${customStyle}`}>
      Get Started
    </button>
  )
}

export default Button