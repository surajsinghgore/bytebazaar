import Image from "next/legacy/image";
import style from "./style.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
function CategoryBanner({category}) {
  return (
    <div className={style.Banner}>
      <div className={style.left}>
        <h1>{category}</h1>
        <div className={style.details}>
          <h6>
            <Link href={"/"}>Home</Link>
          </h6>
          <MdKeyboardArrowRight />
          <p>{category}</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.imgParent}>
          <Image src="/homecard2.webp" alt="home card" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
