import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
export default function page() {
  return (
    <header>
      {/* header logo */}
      <div className="icon">
        <Image src="/icon.jpg" alt="icon logo"layout="fill" />
      </div>
      <span className="brand_title">
        BYTE <span className="sub_brand_name">BAZAAR</span>
      </span>

      {/* links */}
      <div className="links_container">
<li><Link href={""}>Home</Link></li>
<li><Link href={""}>Shop</Link></li>
<li><Link href={""}>Category</Link></li>
<li><Link href={""}>Product</Link></li>
      </div>

      {/* right section */}
      <div className="header_right">
        <li><i><IoSearch/></i></li>
        <li><i><Link href="/register"><FaRegUser/></Link></i></li>
        <li><i><Link href="/"><span>0</span><FiShoppingCart/></Link></i></li>
      </div>
    </header>
  );
}
