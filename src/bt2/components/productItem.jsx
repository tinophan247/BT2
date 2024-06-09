import React from 'react'

function ProductItem({sanpham}) {
  return (
    <div className='w-[300px] border border-black h-auto bg-[#1F3933] text-white'>
        <img src={sanpham.imgURL} alt="" />
        <p className='text-xl font-semibold text-center'>{sanpham.name}</p>
        <p className='text-base  text-center'>{sanpham.price}</p>
        <div className='w-full h-10  flex justify-center mb-5'>
            <button className='w-50% rounded-lg bg-white text-[#1F3933] px-2 py-1 mt-2 font-semibold'> Buy now</button>
        </div>
    </div>
  )
}

export default ProductItem