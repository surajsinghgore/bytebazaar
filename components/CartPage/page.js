"use client";
import { useDispatch, useSelector } from "react-redux";
import { cartPopUpState } from "../../redux/slice/CartPopUpModelState";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
export default function Page() {
  const popState = useSelector((state) => state.cartPopUpState);
  const dispatch = useDispatch();

  const closePop = () => {
    dispatch(cartPopUpState(false));
  };
  return (
    <>
      {popState.state ? (
        <div className="cart_container">
          <div className="bgBlur"></div>
          <div className="cart_page">
            <h2>
              Cart{" "}
              <span
                className="close"
                title="close cart"
                onClick={() => closePop()}
              >
                <IoMdClose />
              </span>
            </h2>

            <div className="item_container">
              <li>
                <div className="item_image">
                  <div className="deleteItems" title="delete">
                    <MdClose />
                  </div>
                  <Image src="/dummy/img1.webp" alt="img 1" layout="fill" />
                </div>
                <div className="item_details">
                  <h1>W. Men Formal T-shirt - white</h1>
                  <p>1 x Rs. 1,700.00</p>
                </div>
              </li>
            </div>

            {/* total */}
            <div className="total_sum">
              <h1>Subtotal:</h1>
              <p>Rs. 27,300.00</p>
            </div>

            <div className="cartButton">
              <Link href="/cart">
                <button>View Cart</button>
              </Link>
              <Link href="/checkout">
                {" "}
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
