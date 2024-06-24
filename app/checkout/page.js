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
              <input type="radio" id="online" />
              <span>Credit card</span>
            </li>
            <li className={style.cardDetails}>
              <div className={style.formInput}>
                <label htmlFor="cardNumber">Country/Region</label>
                <input type="text" placeholder="Card number" id="cardNumber" />
              </div>
            </li>
          </div>
        </form>
      </div>

      {/* item container */}
      <div className={style.itemContainer}></div>
    </div>
  );
}
