import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='h-[50px] w-full flex justify-center'>
        <div className='item'>HOME</div>
        <div className='item item1'>SHOP PAGE</div>
        <div className='item'>SINGLE PRODUCT</div>
        <div className='item'>CART</div>
        <div className='item'>CHECKOUT</div>
        <div className='item'>CATEGORY</div>
        <div className='item'>OTHERS</div>
        <div className='item'>CONTACT</div>
    </div>
  )
}

export default Header;