import Image from "next/legacy/image";
import style from "./style.module.css";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
export default function page() {
  return (
    <div className={style.cartModelContainer}>
      <h1>Your Shopping Cart</h1>

{/* if not item in cart then show this */}
{/* <div className={style.NoItemInCart}>

<h2>Shopping Cart</h2>
<h3>Your cart is currently empty.</h3>
<p>

Continue browsing <Link href="/">here</Link>
</p>
</div> */}

{/* if item in cart */}
<div className={style.ItemInShopCart}>


      {/* cart items section */}
      <div className={style.cartItemParent}>
        {/* item1 */}
        <div className={style.itemSection}>
          {/* img */}
          <div className={style.itemImg}>
            <Image src="/dummy/img1.webp" alt="dummy" layout="fill" />
          </div>
          {/* productName */}
          <div className={style.productName}>
            <Link href="">W. Men Formal T-shirt</Link>
          </div>

          {/* price */}

          <div className={style.price}>Rs. 1,700.00</div>
          {/* qty control */}
          <div className={style.qtyControl}>
            <div className={style.min}>-</div>
            <div className={style.number}>2</div>
            <div className={style.max}>+</div>
          </div>

          {/* total */}

          <div className={style.price}>Rs. 1,700.00</div>

          {/* remove  */}
          <div className={style.remove} title="remove">
            <i>
              <IoMdClose />
            </i>
          </div>
        </div>

    
      </div>

      <div className={style.bottomBtn}>
        <button>Continue Shopping</button>
        <button>Clean cart</button>
      </div>

      {/* bottom section */}

      <div className={style.bottomSection}>
        <div className={style.left}>
          <h4>Special instructions for seller</h4>
          <textarea></textarea>
        </div>
        {/* right */}
        <div className={style.right}>
          <h4>Cart Totals</h4>
          <div className={style.tableSection}>
            <li className={style.heading}>Subtotal</li>
            <li className={style.data}>Rs. 32,000.00</li>

            <li className={style.bottomHeading}>Total</li>
            <li className={style.bottomData}>Rs. 32,000.00</li>
          </div>

          <Link href="/checkout"><button>Proceed to checkout</button></Link>
        </div>
      </div>
      </div>


    </div>
  );
}
