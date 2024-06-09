import React from 'react'

function Header() {
  return (
    <div className='w-full h-16 shadow-xl flex justify-between items-center px-5'>
        <img className='w-12' src='https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt=''/>
        <p className='font-sans text-2xl font-semibold uppercase'>Starbucks</p>
        <div/>
    </div>
  )
}

export default Header