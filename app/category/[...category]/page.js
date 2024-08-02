"use client";
import style from "./style.module.css";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoryBanner from "../../../components/CategoryBanner/CategoryBanner";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import Image from "next/legacy/image";
function Page() {
  const getParams = useParams();
  const [data, setData] = useState([]);

  const [inCartState, setInCartState] = useState(true);
  const { items } = useCart();

  // loading data
  const categoryDataLoading = async () => {
    try {
      let res = await fetch(`/api/product?category=${getParams.category}`);
      let data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryDataLoading();
    let dataCount = items.filter((cartItem) => {
      return cartItem.id.toLowerCase() == item._id;
    });
    if (dataCount.length === 1) {
      setInCartState(false);
    }
  }, []);

  return (
    <div className={style.main}>
      <div className={style.parent}>
        <div className={style.ImageParent}>
        {/* <Image src={data?.image} alt={data?.image} layout="fill" className="w-20 h-20"/> */}
        </div>
        <div className="desc">
          <h1 className="text-red-300">Apple iPhone 13 </h1>
          <h3>Rs 95753487</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nemo explicabo perferendis, deleniti quo quidem consequatur ab esse sequi dolor et doloribus nesciunt dicta tempora. Praesentium eum laudantium ab voluptatibus voluptatum molestias consequatur corrupti repudiandae repellendus, ut quia animi vitae! Ut ullam quas molestiae magnam iste, laboriosam aliquam? Ad dolorem praesentium vel dolores fugiat expedita temporibus voluptate optio fugit dicta eos ex asperiores deserunt rem voluptas repellendus magni, commodi iure dolor ullam quos eaque. Aliquam placeat reiciendis sapiente corporis perspiciatis, numquam ipsa necessitatibus? Sint perferendis ratione accusamus aspernatur nulla sunt labore quae similique quis odit, quasi voluptate optio maiores expedita ducimus commodi facere, voluptatum incidunt suscipit fugiat tempore neque recusandae vitae adipisci. Sed mollitia dolorem odio odit provident debitis numquam voluptates culpa aperiam consectetur, architecto harum expedita nihil suscipit vero laudantium libero, repellat tempore corrupti ad, ab molestias. Corporis quo perspiciatis aut cumque eum, delectus quae ipsa repudiandae est dolorum!</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
