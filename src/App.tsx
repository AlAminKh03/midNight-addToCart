import "./App.css";
import { useState } from "react";
import Carts from "./Components/Carts";
import Products from "./Components/products";
import { ProductsType } from "./Components/products";

function App() {
  const [cart, setCart] = useState<ProductsType[]>([]);
  const [products, setProducts] = useState<ProductsType[]>([]);
  console.log(cart);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <Products
          setCart={setCart}
          setProducts={setProducts}
          products={products}
        />
      </div>
      <div className="col-span-4">
        <Carts cart={cart} />
      </div>
    </div>
  );
}

export default App;
