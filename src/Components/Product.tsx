import { ProductsType } from "./products";

interface ClothType {
  cloth: ProductsType;
  setCart: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
}
const Product = ({ cloth, setCart, setProducts }: ClothType) => {
  const { id, name, image, quantity, price } = cloth;
  const handleCart = (singleCloth: ProductsType) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item.id === singleCloth.id
      );
      if (productIndex !== -1) {
        prevCart[productIndex].quantity += 1;
        return [...prevCart];
      } else {
        // If the product is not in the cart, add it
        return [...prevCart, { ...singleCloth, quantity: 1 }]; // Add a new product with quantity 1
      }
    });
  };
  return (
    <div className="border border-gray-100 rounded-md">
      <div className="w-[200px] h-[200px] mx-auto">
        <img src={image} alt={name} />
      </div>
      <div className="pt-10 pl-6">
        <p className="text-2xl">{name}</p>
        <p>price: {price}</p>
        <p>quantity: {quantity}</p>
      </div>
      <div
        className=" mt-4 bg-green-500 hover:bg-green-700 text-center p-2 rounded-md mx-auto cursor-pointer"
        onClick={() => handleCart(cloth)}
      >
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
