"use client";
import style from "./style.module.css";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoryBanner from "../../../components/CategoryBanner/CategoryBanner";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
function Page() {
  const getParams = useParams();
  const [inCartState, setInCartState] = useState(true);
  const { items } = useCart();

  useEffect(() => {
    let dataCount = items.filter((cartItem) => {
      return cartItem.id.toLowerCase() == item._id;
    });
    if (dataCount.length === 1) {
      setInCartState(false);
    }
  }, []);

  return (
    <>
      {/* {getParams.category} */}
      <CategoryBanner category={getParams.category} />
      <div className={style.container}>
        <CategoryCard inCartState={inCartState} />
        <CategoryCard inCartState={inCartState} />
        <CategoryCard inCartState={inCartState} />
        <CategoryCard inCartState={inCartState} />
      </div>
    </>
  );
}

export default Page;
