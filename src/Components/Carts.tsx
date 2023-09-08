import React from "react";

import { ProductsType } from "./products";
import Cart from "./Cart";

interface CartType {
  cart: ProductsType[];
}

const Carts = ({ cart }: CartType) => {
  return (
    <div>
      {cart.length < 1 ? (
        <p>"No product added in the cart" </p>
      ) : (
        cart.map((item) => <Cart item={item} />)
      )}
    </div>
  );
};

export default Carts;
