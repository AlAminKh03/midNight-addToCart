import React from "react";
import Product from "./Product";

export interface ProductsType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface StateType {
  setCart: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  products: ProductsType;
}
export const Colthes: ProductsType[] = [
  {
    id: 1,
    name: "t-shirt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
    price: 200,

    quantity: 20,
  },
  {
    id: 2,
    name: "Shirt",
    image:
      "https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001-450x450.jpg",
    price: 400,

    quantity: 20,
  },
  {
    id: 3,
    name: "Sweat pant",
    image:
      "https://images.othoba.com/images/thumbs/0511189_baby-boys-cotton-full-length-trouser-sweatpant-joggers.webp",
    price: 500,

    quantity: 20,
  },
  {
    id: 5,
    name: "sweat shirt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ch0OhZ-y77cdjGY65ZlOFg1UNyK3hhQ1UMxEywnD8iTPu9QFXDqfoaznuHLXaV6yV8&usqp=CAU",
    price: 350,

    quantity: 20,
  },
];

const products = ({ setCart, setProducts }: StateType) => {
  return (
    <div className="grid grid-cols-12 gap-4 ml-10">
      {Colthes.map((cloth) => {
        return (
          <div className="col-span-4" key={cloth.id}>
            <Product
              cloth={cloth}
              setCart={setCart}
              setProducts={setProducts}
            />
          </div>
        );
      })}
    </div>
  );
};

export default products;
