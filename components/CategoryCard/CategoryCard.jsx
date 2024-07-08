'use client'
import style from "../../app/category/[...category]/style.module.css";
import { FaHeart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/legacy/image";
function CategoryCard({inCartState}) {
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
  return (
    <div className={style.card}>
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


          <div className="images">
            <Image src="/cart1.webp" alt=" cart1 image" layout="fill" />
          </div>
        </div>
  )
}

export default CategoryCard
