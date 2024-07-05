"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var pincodeDirectory = require("india-pincode-lookup");
export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    country: "india",
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    items: [],
  });
  const [coupon, setCoupon] = useState("");
  const [onlinePaymentState, setOnlinePaymentState] = useState(true);
  const { cartTotal, items } = useCart();
  const [pincode, setPincode] = useState("");
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
  // form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkCoupon = () => {
    if (coupon == "") {
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
    } else {
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
  };

  const changePaymentMode = (active) => {
    if (active == "cod") {
      setOnlinePaymentState(false);
      document.getElementById("cod").checked = true;
    } else {
      setOnlinePaymentState(true);
      document.getElementById("card").checked = true;
    }
  };

  const handlePinCodeChange = (e) => {
    if (e.target.value.length <= 6) {
      setPincode(e.target.value);
    }
    if (e.target.value.length == 6) {
      let pincodeData = pincodeDirectory.lookup(e.target.value);

      setFormData({
        ...formData,
        city: pincodeData[0].districtName,
        state: pincodeData[0].stateName,
      });
    }
  };
  const handleWheel = (e) => {
    e.preventDefault();
  };
  const orderNow = async (e) => {
    e.preventDefault();
    if (items.length == 0) {
      toast.warn("Please Add Some Item In Cart", {
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
    if (formData.email == "") {
      toast.warn("Enter Email Id", {
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

    if (formData.fname == "") {
      toast.warn("Enter First Name", {
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
    if (formData.address == "") {
      toast.warn("Enter Address", {
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
    if (formData.pincode == "") {
      toast.warn("Enter Pincode Address", {
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
    let totalAmount = 0;

    let itemProduct = [];
    items.map((item) => {
      let total = parseInt(item.price * item.qtyBook);
      totalAmount += parseInt(total);
      itemProduct.push({
        productId: item.id,
        productName: item.productName,
        price: item.price * item.qtyBook,
        qty: item.qtyBook,
      });
    });
    // specialInstruction
    let specialInstruction = "";
    if (localStorage.getItem("specialInstruction")) {
      specialInstruction = localStorage.getItem("specialInstruction");
    }
    let amountReceived = "";

    let paymentMethod = "";
    if (onlinePaymentState) {
      paymentMethod = "online";
      amountReceived = totalAmount;
    } else {
      paymentMethod = "cod";
      amountReceived = 0;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        Items: itemProduct,
        specialInstruction: specialInstruction,
        totalamount: totalAmount,
        amountreceived: amountReceived,
        paymentmode: paymentMethod,
        pincode: pincode,
        state: formData.state,
        city: formData.city,
        address: formData.address,
        email: formData.email,
        lastName: formData.lname,
        firstName: formData.fname,
        country: formData.country,
      }),
    });
    const data = await res.json();

    if (res.status === "500") {
      toast.error("Internal Server Erro", {
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
    if (res.status === "400" || res.status === "404" || res.status === "401") {
      toast.warn(data.error, {
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

    if (res.status === "201") {
      toast.warn("Order Placed Successfully", {
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
  };
  return (
    <div className={style.checkoutContainer}>
      <div className={style.formContainer}>
        <form method="post" onSubmit={orderNow}>
          <h1>Contact</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="email"
            className={style.fullSizeInput}
            required
          />

          <h1>Delivery</h1>
          <div className={style.country}>
            <label htmlFor="selectCountry">Country/Region</label>
            <select
              className={style.fullSizeInput}
              id="selectCountry"
              name="country"
              value={formData.country}
              onChange={(e) => handleInputChange(e)}
            >
              <option defaultChecked>India</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="First name "
            name="fname"
            value={formData.fname}
            onChange={(e) => handleInputChange(e)}
            className={style.smallSizeInput}
            required
          />

          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={(e) => handleInputChange(e)}
            placeholder="Last name (optional)"
            className={style.smallSizeInput}
          />
          <input
            type="number"
            placeholder="pincode"
            value={pincode}
            onWheel={handleWheel}
            onChange={(e) => handlePinCodeChange(e)}
            className={style.fullSizeInput}
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => handleInputChange(e)}
            placeholder="Address"
            className={style.fullSizeInput}
            required
          />

          <input
            type="text"
            placeholder="city"
            name="city"
            value={formData.city}
            onChange={(e) => handleInputChange(e)}
            className={style.smallSizeInput}
            readOnly
          />

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={(e) => handleInputChange(e)}
            placeholder="state"
            className={style.smallSizeInput}
            readOnly
          />

          <h1>Payment</h1>
          <p>All transactions are secure and encrypted.</p>

          <div className={style.payment}>
            <li
              onClick={() => changePaymentMode("card")}
              style={{ cursor: "pointer" }}
            >
              <input type="radio" name="paymentmode" id="card" defaultChecked />
              <span>Credit card</span>
            </li>
            {onlinePaymentState && (
              <>
                <li className={style.cardDetails}>
                  <div className={style.formInput}>
                    <input
                      type="text"
                      placeholder="Card number"
                      id="cardNumber"
                    />
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
              </>
            )}

            <li
              onClick={() => changePaymentMode("cod")}
              style={{ cursor: "pointer" }}
            >
              <input type="radio" name="paymentmode" id="cod" />
              <span>Cash on Delivery (COD)</span>
            </li>
          </div>

          <div className={style.payNow}>
            <button type="submit" onClick={() => orderNow()}>
              Pay Now
            </button>
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
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Discount code or gift card"
            />
            <button onClick={() => checkCoupon()}>Apply</button>
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
