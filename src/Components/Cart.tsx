import { ProductsType } from "./products";

interface ItemType {
  item: ProductsType;
}

const Cart = ({ item }: ItemType) => {
  console.log(item);
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} className="w-[120px] h-[120px]" />
      </div>
      <div>{item.quantity}</div>
    </div>
  );
};

export default Cart;
