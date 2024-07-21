import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import axios from "axios";

function ProductList() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/productList').then(res => setList(res.data))
  },[])

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
