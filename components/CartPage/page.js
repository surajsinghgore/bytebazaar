import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";
export default function page() {
  return (
    <div className='cart_container'>
    <div className="bgBlur">

    </div>
    <div className="cart_page">
      
      <h2>Cart <span className='close' title="close cart"><IoMdClose /></span></h2>

<div className="item_container">

</div>

{/* total */}
<div className="total_sum">
<h1>
Subtotal:
</h1>
<p>Rs. 27,300.00</p>
</div>

<div className="cartButton">
   <button><Link href=""> View Cart</Link></button>
   <button><Link href="">Checkout</Link></button>
</div>
    </div>
    </div>
  )
}
