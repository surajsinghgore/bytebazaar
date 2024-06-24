import style from './style.module.css'

export default function page() {
  return (
    <div className={style.ordercomplete}>
      <div className={style.left}>
        <h1>Thank you for your purchase !</h1>
        <p>Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>

        <h3>Billing address</h3>
        <div className={style.details}>
<li><b>Name</b> <span>Jane smith</span></li>
<li><b>Address</b> <span>456 Oak St #3b, sans francisco, CA 6475 United States</span></li>
<li><b>Phone</b> <span>+91 7859875898</span></li>
<li><b>Email</b> <span>jane.smith@email.com</span></li>

        </div>
      </div> 


      <div className={style.right}>
<h1>Order Summary</h1>
<div className={style.orderDate}>
<div className={style.date}>
    <p>Date</p>
    <h6>02 May 2024</h6>
</div>
<div className={style.date}>
    <p>Order Number</p>
    <h6>02-2347689574</h6>
</div>
<div className={style.date}>
    <p>Payment Method</p>
    <h6>Mastercard</h6>
</div>
</div>


<div className={style.items}>
<div className={style.imageSection}>
<img src="cart1.webp" alt="image section" />
</div>
<div className={style.itemDetails}  >
<h3>All in one chocolate Combo</h3>
<p>Pack: Medium</p>
<p>Qty: 1</p>
</div>
<div className={style.rs}>
    $50.0
</div>
</div>


<div className={style.innerDetails}>
<li><span>Sub Total</span> <span>$100.90</span></li>
<li><span>Shipping</span> <span>$2</span></li>
<li><span>Tax</span> <span>$5</span></li>
</div>

<div className={style.total}>
<li><span>Order Total</span> <span>$107.00</span></li>
</div>
      </div>
    </div>
  )
}
