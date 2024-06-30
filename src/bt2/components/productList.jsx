import React, { useState } from "react";
import ProductItem from "./productItem";

function ProductList() {
    const [list, setList] = useState(productList)

    const productList = [
        {
            id : 1,
            name : 'Cold Brew',
            imgURL : 'https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/cold-brew.webp',
            price : '65.000'
        },
        {
            id : 2,
            name : 'Americano',
            imgURL : 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630',
            price : '55.000'
        },
    ]


  return (
    <div>
      <h1 className="text-4xl font-semibold uppercase text-center mt-2">
        Our Products
      </h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 gap-20 ">
            {list.map((sp,index)=> (
            <ProductItem key={index} sanpham={sp}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
