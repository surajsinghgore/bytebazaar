"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}-${month}-${year}`;
};
export default function page() {
  const [orderData, setOrderData] = useState([""]);

  useEffect(() => {
    if (localStorage.getItem("order")) {
      setOrderData(JSON.parse(localStorage.getItem("order")));
      console.log(JSON.parse(localStorage.getItem("order")));
    }
  }, []);

  return (
    <>
      {orderData.length != 0 ? (
        <>
          <div className={style.ordercomplete}>
            <div className={style.left}>
              <h1>Thank you for your purchase </h1>
              <p>
                Your order will be processed within 24 hours during working
                days. We will notify you by email once your order has been
                shipped.
              </p>

              <h3>Billing address</h3>
              <div className={style.details}>
                <li>
                  <b>Name</b>{" "}
                  <span>
                    {orderData.firstName}{" "}
                    {orderData.lastName && orderData.lastName}
                  </span>
                </li>
                <li>
                  <b>Address</b> <span>{orderData.address}</span>
                </li>
                <li>
                  <b>Phone</b> <span>+91 {orderData.mobile}</span>
                </li>
                <li>
                  <b>Email</b> <span>{orderData.email}</span>
                </li>
              </div>
            </div>

            <div className={style.right}>
              <h1>Order Summary</h1>
              <div className={style.orderDate}>
                <div className={style.date}>
                  <p>Date</p>
                  <h6>{formatDate(orderData.createdAt)} </h6>
                </div>
                <div className={style.date}>
                  <p>Order Number</p>
                  <h6>{orderData.productToken}</h6>
                </div>
                <div className={style.date}>
                  <p>Payment Method</p>
                  <h6>{orderData.paymentmode}</h6>
                </div>
              </div>

              {orderData.Items && (
                <>
                  {orderData.Items.map((item) => (
                    <div className={style.items} key={item._id}>
                      <div className={style.imageSection}>
                        <img src={item.productImage} alt={item.productImage} />
                      </div>
                      <div className={style.itemDetails}>
                        <h3>{item.productName}</h3>
                        <p>Qty: {item.qty}</p>
                      </div>
                      <div className={style.rs}>{item.price*item.qty}</div>
                    </div>
                  ))}
                </>
              )}

              <div className={style.innerDetails}>
                <li>
                  <span>Sub Total</span> <span>Rs {orderData.totalamount}</span>
                </li>
                <li>
                  <span>Shipping</span> <span>Rs 0</span>
                </li>
                <li>
                  <span>Tax</span> <span>Rs 0</span>
                </li>
              </div>

              <div className={style.total}>
                <li>
                  <span>Order Total</span> <span>Rs {orderData.totalamount}</span>
                </li>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
