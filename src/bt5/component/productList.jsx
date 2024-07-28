import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
// import axios from "axios";
import { useDispatch } from "react-redux";
import {addtoCart} from "../redux/slice/cartSlice"

function ProductList() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/productList")
    //   .then((res) => setList(res.data));
    setList(productList)
  }, []);

  const productList = [
    {
      id: 1,
      name: "Cold Brew",
      imgURL:
        "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/cold-brew.webp",
      price: 65000,
    },
    {
      id: 2,
      name: "Americano",
      imgURL:
        "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630",
      price: 55000,
    },
    {
      id: 3,
      name: "Frappuchino",
      imgURL:
        "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190528_CoffeeFrapp.jpg?impolicy=1by1_wide_topcrop_630",
      price: 65000,
    },
    {
      id: 4,
      name: "Mocha Coffee",
      imgURL:
        "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220607_CaffeMocha.jpg?impolicy=1by1_wide_topcrop_630",
      price: 55000,
    },
  ];

  const addCart = (index) => {
    dispatch(addtoCart(productList[index]))
  }

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
          {list.map((sp, index) => (
            <ProductItem key={index} sanpham={sp} addCart={() => addCart(index)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
