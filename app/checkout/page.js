"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useCart } from "react-use-cart";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
const[coupon,setCoupon]=useState('')

const [onlinePaymentState,setOnlinePaymentState]=useState(true);
  const { cartTotal, items } = useCart();
  const [payableAmount, setPayableAmount] = useState(0);
  useEffect(() => {
    setPayableAmount(0);
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      let number = parseInt(items[i].qtyBook * items[i].price);
      sum += number;
    }
    setPayableAmount(sum);
  }, []);




  const checkCoupon=()=>{
    if(coupon==""){
      toast.error("Please Enter Coupon Code", {
        position: "bottom-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    else{
      toast.error("Invalid Coupon Code", {
        position: "bottom-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  const changePaymentMode=(active)=>{
if(active=="cod"){
  setOnlinePaymentState(false)
  document.getElementById('cod').checked = true;
}else{
  setOnlinePaymentState(true)
  document.getElementById('card').checked = true;

}
  }
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

     
            <li onClick={()=>changePaymentMode('card')} style={{cursor:'pointer'}}>
              <input type="radio" name="paymentmode"  id="card" defaultChecked/>
              <span>Credit card</span>
            </li>
            {onlinePaymentState&&<>
              <li className={style.cardDetails}>
              <div className={style.formInput}>
                <input type="text" placeholder="Card number" id="cardNumber" />
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  className={style.half}
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  className={style.half}
                />
                <input type="text" placeholder="Name on Card" />
              </div>
            </li>
            </>}
           




            <li onClick={()=>changePaymentMode('cod')} style={{cursor:'pointer'}}>
              <input type="radio" name="paymentmode" id="cod" />
              <span >Cash on Delivery (COD)</span>
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
          {items.length != 0 && (
            <>
              {items.map((item) => {
                return (
                  <div className={style.items} key={item.id}>
                    <div className={style.imageContainer}>
                      <div className={style.qty}>{item.qtyBook}</div>
                      <img src={item.productImage} alt={item.productImage} />
                    </div>
                    <div className={style.titleOfItem}>{item.productName}</div>
                    <div className={style.rs}>{item.price * item.qtyBook}</div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* bottom total */}
        <div className={style.bottomTotal}>
          <div className={style.discount}>
            <input
              type="text"
              name="Coupon"
              value={coupon}
              onChange={(e)=>setCoupon(e.target.value)}
              placeholder="Discount code or gift card"
            />
            <button onClick={()=>checkCoupon()}>Apply</button>
          </div>
          <div className={style.price}>
            <li>
              <span>Subtotal</span> <span>Rs {cartTotal}</span>
            </li>

            <li>
              <span>Shipping</span> <span>Rs 0.0</span>
            </li>

            <li>
              <span className={style.heading}>Total</span>{" "}
              <span className={style.priceTotal}>Rs {payableAmount}</span>
            </li>
          </div>
          
        </div>
      </div>
    </div>
  );
}
