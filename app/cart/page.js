import style from "./style.module.css";

export default function page() {
  return (
    <div className={style.cartModelContainer}>
      <h1>Your Shopping Cart</h1>

      <div className={style.cartItemParent}></div>

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

          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
