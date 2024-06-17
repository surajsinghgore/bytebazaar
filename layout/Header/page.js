"use client";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {
  const [loginStatus, setLoginStatus] = useState(false);
  // login user validate
  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLoginStatus(true);
    }
  });
  return (
    <header>
      {/* header logo */}
      <div className="icon">
        <Link href="/">
          <Image src="/icon.jpg" alt="icon logo" layout="fill" />
        </Link>
      </div>
      <span className="brand_title">
        BYTE <span className="sub_brand_name">BAZAAR</span>
      </span>

      {/* links */}
      <div className="links_container">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={""}>Shop</Link>
        </li>
        <li>
          <Link href={""}>Category</Link>
        </li>
        <li>
          <Link href={""}>Product</Link>
        </li>
      </div>

      {/* right section */}
      <div className="header_right">
        <li>
          <i>
            <IoSearch />
          </i>
        </li>
        <li className="userMenu">
          <i>
            <Link href={loginStatus ? "/user" : "/login"}>
              <FaRegUser />
            </Link>
          </i>
          <ul className="userSubMenu">
            <li>
              <Link href="">My Account</Link>
            </li>
            <li>
              <Link href="">Wish List</Link>
            </li>
            <li>
              <Link href="">Logout</Link>
            </li>
          </ul>
        </li>
        <li>
          <i>
            <Link href="/">
              <span>0</span>
              <FiShoppingCart />
            </Link>
          </i>
        </li>
      </div>
    </header>
  );
}
