import style from "./style.module.css";

export default function page() {
  return (
    <div className={style.checkoutContainer}>
      <div className={style.formContainer}>
        <form>
          <h1>Contact</h1>
          <input
            type="email"
            placeholder="email"
            className={style.fullSizeInput}
          />

          <h1>Delivery</h1>
          <div className={style.country}>
            <label htmlFor="selectCountry">Country/Region</label>
            <select className={style.fullSizeInput} id="selectCountry">
              <option defaultChecked>India</option>
              <option>Australia</option>
              <option>New Zealand</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="First name "
            className={style.smallSizeInput}
          />

          <input
            type="text"
            placeholder="Last name (optional)"
            className={style.smallSizeInput}
          />
          <input
            type="text"
            placeholder="Address"
            className={style.fullSizeInput}
          />

          <input
            type="text"
            placeholder="city"
            className={style.xSmallSizeInput}
          />

          <input
            type="text"
            placeholder="state"
            className={style.xSmallSizeInput}
          />
          <input
            type="number"
            placeholder="pincode"
            className={style.xSmallSizeInput}
          />

          <h1>Payment</h1>
          <p>All transactions are secure and encrypted.</p>

          <div className={style.payment}>
            <li>
              <input type="radio" name="paymentmode" />
              <span>Credit card</span>
            </li>
            <li className={style.cardDetails}>
              <div className={style.formInput}>
                <input type="text" placeholder="Card number" id="cardNumber" />
                <input type="text" placeholder="Expiration date (MM/YY)" className={style.half}/>
                <input type="text" placeholder="Security Code" className={style.half}/>
                <input type="text" placeholder="Name on Card" />
              </div>
            </li>



            <li>
              <input type="radio" name="paymentmode" id="" />
              <span>Cash on Delivery (COD)</span>
            </li>
          </div>


          <div className={style.payNow}>
<button type="submit">Pay Now</button>

          </div>
        </form>
      </div>

      {/* item container */}
      <div className={style.itemContainer}>
      <div className={style.itemMainContainer}>


        <div className={style.items}>
        <div className={style.imageContainer}>
<div className={style.qty}>1</div>
          <img src="cart1.webp" alt="cart dummy image" />
        </div>
        <div className={style.titleOfItem}>
        Aa. Men Coat
        </div>
        <div className={style.rs}>
        $117.00
        </div>
        </div>

        <div className={style.items}>
        <div className={style.imageContainer}>
<div className={style.qty}>1</div>
          <img src="cart1.webp" alt="cart dummy image" />
        </div>
        <div className={style.titleOfItem}>
        Aa. Men Coat
        </div>
        <div className={style.rs}>
        $117.00
        </div>
        </div>

        </div>

        {/* bottom total */}
        <div className={style.bottomTotal}>
<div className={style.discount}>
<input type="text" name="" placeholder="Discount code or gift card" />
<button>Apply</button>
</div>
<div className={style.price}>
<li><span >Subtotal</span> <span >$627.00</span></li>

<li><span >Shipping</span> <span >$0.15</span></li>

<li><span className={style.heading}>Total</span> <span className={style.priceTotal}>
$627.15</span></li>
</div>

        </div>
      </div>
    </div>
  );
}
