import style from '../../app/products/style.module.css'
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/legacy/image";
import Link from "next/link";
export default function page({item}) {
    
  return (
    <div className={style.itemCard} key={item._id}>
      <div className={style.itemCardImageContainer}>
        <Image src={item.image} alt={item.image} layout="fill" />
        {/* menu on image */}
        <div className={style.menuOnImage}>New</div>

        {/* image drop down */}
        <div className={style.imageDropDown}>
          <li title="Quick View">
            <Link href="">
              <FaRegEye />
            </Link>
          </li>
          <li title="Add to cart">
            <Link href="">
              <FaShoppingCart />
            </Link>
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
