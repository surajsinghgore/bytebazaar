import style from "./style.module.css";
import { TbMoneybag } from "react-icons/tb";
import { CiCreditCard2 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import Link from "next/link";
export default function page() {
  return (
    <div className={style.footer}>
      <div className={style.iconParent}>
        <li>
          <div className={style.icon}>
            <CiDeliveryTruck />
          </div>
          <div className={style.details}>
            <h2>Free Shipping</h2>
            <h5>
              On orders over <span>$99</span>.
            </h5>
          </div>
        </li>

        <li>
          <div className={style.icon}>
            <TbMoneybag />
          </div>
          <div className={style.details}>
            <h2>Money Back</h2>
            <h5>Money back in 15 days.</h5>
          </div>
        </li>

        <li>
          <div className={style.icon}>
            <CiCreditCard2 />
          </div>
          <div className={style.details}>
            <h2>Secure Checkout</h2>
            <h5>100% Payment Secure.</h5>
          </div>
        </li>

        <li>
          <div className={style.icon}>
            <RiCustomerServiceLine />
          </div>
          <div className={style.details}>
            <h2>Online Support</h2>
            <h5>Ensure product quality</h5>
          </div>
        </li>
      </div>

      {/* footer bottom section */}
      <div className={style.footer_details}>
        {/* about us container */}
        <div className={style.aboutUsContainer}>
          <h1>About Us</h1>
          <p>
            Byte Bazaar E-Commerce is a dynamic and innovative online retail
            platform that offers a wide range of products to customers
            worldwide.
          </p>
        </div>

        {/* quick link */}
        <div className={style.quickLink}>
          <h1>Quick Link</h1>

          <li>
            <Link href="">My Account</Link>
          </li>
          <li>
            <Link href="">My Cart</Link>
          </li>
          <li>
            <Link href="">Wishlist</Link>
          </li>
          <li>
            <Link href="">Gift Card</Link>
          </li>
          <li>
            <Link href="">Need Help ?</Link>
          </li>
        </div>

        {/* information */}
        <div className={style.quickLink}>
          <h1>Information</h1>

          <li>
            <Link href="">About us</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <li>
            <Link href="">Blogs</Link>
          </li>
          <li>
            <Link href="">Size Chart</Link>
          </li>
          <li>
            <Link href="">FAQ</Link>
          </li>
        </div>

        {/* Newsletter */}
        <div className={style.aboutUsContainer}>
          <h1>Newsletter</h1>
          <p>
            Learn about our most recent news, updates, and deals by subscribing.
          </p>
          <div className={style.formContainer}>
            <input type="email" placeholder="email@example.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>


      <div className={style.list_line}>
<div className={style.brandName}>
© <Link href="">byte bazaar</Link>. All rights reserved.
</div>

<div className={style.linkFooter}>
<li><Link href="">Privacy Policy</Link></li>
<li><Link href="">Refund Policy</Link></li>
<li><Link href="">Shipping Policy</Link></li>
<li><Link href="">Terms of Service</Link></li>
</div>
      </div>
    </div>
  );
}
