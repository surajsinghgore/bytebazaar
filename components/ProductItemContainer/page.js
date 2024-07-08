"use client";
import style from "../../app/products/style.module.css";
import { FaRegEye } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/legacy/image";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page({ item }) {
  const [inCartState, setInCartState] = useState(true);
  const { items, removeItem, addItem } = useCart();

  const checkInCart = () => {
    let dataCount = items.filter((cartItem) => {
      return cartItem.id.toLowerCase() == item._id;
    });
    if (dataCount.length === 1) {
      setInCartState(true);
    } else {
      setInCartState(false);
    }
  };
  const addProductToCart = (product) => {
    let productName = product.name;
    let productImage = product.image;
    let productPrice = product.price;
    let id = product._id;
    let QtyBook = 1;
    addItem({
      id,
      productName,
      productImage,
      price: productPrice,
      qtyBook: QtyBook,
    });
    checkInCart();
    toast.success(`${productName} successfully added in cart`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeFromCart = (id, name) => {
    removeItem(id);
    checkInCart();
    toast.error(`${name} successfully removed from cart`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    let dataCount = items.filter((cartItem) => {
      return cartItem.id.toLowerCase() == item._id;
    });
    if (dataCount.length === 1) {
      setInCartState(false);
    }
  }, []);


  return (
    <div className={style.itemCard} key={item._id}>
      <div className={style.itemCardImageContainer}>
        <Image src={item.image} alt={item.image} layout="fill" />
        {/* menu on image */}
        <div className={style.menuOnImage}>New</div>

        {/* image drop down */}
        <div className={style.imageDropDown}>
          <li title="Quick View">
            <FaRegEye />
          </li>
          {inCartState ? (
            <>
              <li title="Add to cart" onClick={() => addProductToCart(item)}>
                <FaShoppingCart />
              </li>
            </>
          ) : (
            <>
              <li
                title="Remove From Cart"
                onClick={() => removeFromCart(item._id, item.name)}
              >
                <MdRemoveShoppingCart />
              </li>
            </>
          )}

          <li title="Add to wishlist">
            <FaHeart />
          </li>
        </div>
      </div>

      <div className={style.productDesc}>
        <h2>{item.name}</h2>
        <p>Rs. {item.price}</p>
      </div>
    </div>
  );
}
