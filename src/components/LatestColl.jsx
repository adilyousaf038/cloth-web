import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productsitem from "./ProductsItem";

const LatestColl = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [latestProducts, setlatesProducts] = useState([]);

  useEffect(() => {
    setlatesProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-5">
      <div className="text-center py-5 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          eveniet, dicta aliquid earum atque eos ducimus assumenda.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <Productsitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestColl;
