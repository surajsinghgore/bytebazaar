"use client";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { cartPopUpState } from "../../redux/slice/CartPopUpModelState";
import { cartDataChangeState } from "../../redux/slice/CartDataChangeState";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
import React, { useEffect, useRef } from 'react';
export default function Page() {
  const modalRef = useRef(null);

  // const [cartData]
  const popState = useSelector((state) => state.cartPopUpState);
  const cartDataState = useSelector((state) => state.cartDataChangeState);
  const dispatch = useDispatch();

  const closePop = () => {
    dispatch(cartPopUpState(false));
  };

  const { cartTotal, removeItem, items } = useCart();

  const removeFromCart = (id) => {
    removeItem(id);
    dispatch(cartDataChangeState(!cartDataState.state));
  };




  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closePop();
    }
  };

  useEffect(() => {
    if (popState) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  
  }, [popState]);
  return (
    <>
      {popState.state ? (
        <div className="cart_container">
          <div className="bgBlur"></div>
          <div className="cart_page" ref={modalRef}>
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
              {/* cart item image */}
              {items.length != 0 ? (
                <>
                  {items.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className="item_image">
                          <div
                            className="deleteItems"
                            title="delete"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                          >
                            <MdClose />
                          </div>
                          <Image
                            src={item.productImage}
                            alt={item.productImage}
                            layout="fill"
                          />
                        </div>
                        <div className="item_details">
                          <h1>{item.productName}</h1>
                          <p>
                            {" "}
                            {item.qtyBook} x Rs. {item.qtyBook * item.price}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  <li>cart is empty</li>
                </>
              )}
            </div>

            {/* total */}
            <div className="total_sum">
              <h1>Subtotal:</h1>
              <p>Rs. {cartTotal}</p>
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
