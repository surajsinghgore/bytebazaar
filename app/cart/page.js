"use client"
import Image from "next/legacy/image";
import style from "./style.module.css";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
export default function page() {
  const { emptyCart, removeItem, items,updateItem } = useCart();

  const [payableAmount,setPayableAmount]=useState(0);



// clean cart
  const cleanAllCartItem=()=>{
    emptyCart();
    setPayableAmount(0)
     toast.error('Cart Clean Successfully', {
          position: "bottom-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
   
    }

// delete item
const deleteItem=(item)=>{
  removeItem(item.id);
if(items.length==1){
setPayableAmount(0)

}

toast.error(`Item successfully removed from cart`, {
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
}

  // decrement
const decrement=(item)=>{
  let book=parseInt(item.qtyBook);
  let book1=--book;
  if(book1!==0){
  let qb=parseInt(--item.qtyBook)
  let tm=parseInt(item.price*item.qtyBook)
  updateItem(item.id,{
  qtyBook:qb,
  itemTotal:tm
  })
  
  }
  else{
   deleteItem(item)
  
  }
  }
  
  

  // increment
const increment=(item)=>{

let qb=parseInt(++item.qtyBook)
let tAmt=parseInt(item.price*item.qtyBook)
updateItem(item.id,{
qtyBook:qb,
totalAmount:tAmt
})



}

useEffect(()=>{
  setPayableAmount(0)
  let sum=0;
  for (let i = 0; i < items.length; i++) {
    let number=parseInt(items[i].qtyBook*items[i].price)
    sum+=number;
}
    setPayableAmount(sum)
},[decrement,increment,cleanAllCartItem,deleteItem])


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


      {items.length != 0 ?
      <>
        {items.map((item)=>{
          return   <div className={style.itemSection} key={item.id}>
          {/* img */}
          <div className={style.itemImg}>
            <Image src={item.productImage} alt={item.productImage} layout="fill" />
          </div>
          {/* productName */}
          <div className={style.productName}>
            <Link href="">{item.productName}</Link>
          </div>

          {/* price */}

          <div className={style.price}>{item.price}</div>
          {/* qty control */}
          <div className={style.qtyControl}>
            <div className={style.min} onClick={()=>decrement(item)}>-</div>
            <div className={style.number}>{item.qtyBook}</div>
            <div className={style.max}  onClick={()=>increment(item)}>+</div>
          </div>

          {/* total */}

          <div className={style.price}>{item.price*item.qtyBook}</div>

          {/* remove  */}
          <div className={style.remove}  >
            <i>
              <IoMdClose onClick={()=>deleteItem(item)} title="remove" />
            </i>
          </div>
        </div>
        })}
      </>:<h1>Your cart is currently empty.</h1>}
        {/* item1 */}
      

    
      </div>

      <div className={style.bottomBtn}>
      <Link href={"/products"}>  <button>Continue Shopping</button></Link>
        <button onClick={()=>cleanAllCartItem()}>Clean cart</button>
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
            <li className={style.data}>Rs. {payableAmount}</li>

            <li className={style.bottomHeading}>Total</li>
            <li className={style.bottomData}>Rs. {payableAmount}</li>
          </div>

          <Link href="/checkout"><button>Proceed to checkout</button></Link>
        </div>
      </div>
      </div>


    </div>
  );
}
