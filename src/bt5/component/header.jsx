import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector(store => store.cart)

  return (
    <div className="w-full h-16 shadow-xl flex justify-between items-center px-5">
      <Link to={"/bt5"}>
        <img
          className="w-12"
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          alt=""
        />
      </Link>
      <p className="font-sans text-2xl font-semibold uppercase">Starbucks</p>
      <Link to={"/bt5/cart"} className="relative cursor-pointer">
        <ShoppingCartIcon />
        <div className=" absolute -top-[30%] -right-[30%] w-5 h-5 rounded-full bg-red-500 text-white text-center pb-1">
          {cart.length ?? 0}
        </div>
      </Link>
    </div>
  );
}

export default Header;
