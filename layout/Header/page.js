import Image from "next/image";

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
<li>Home</li>
<li>Shop</li>
<li>Category</li>
<li>Product</li>
      </div>
    </header>
  );
}
