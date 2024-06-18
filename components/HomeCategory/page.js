import Image from "next/legacy/image";
import style from "./style.module.css";

export default function page() {
  return (
    <div>
      <div className={style.category_cards}>
        <div className={style.card}>
          <div className={style.imageSection}>
            <Image src="/homecard1.webp" alt="home card 1" layout="fill" />
          </div>
          <h2>Headphone</h2>
        </div>

        <div className={style.card}>
          <div className={style.imageSection}>
            <Image src="/homecard2.webp" alt="home card 1" layout="fill" />
          </div>
          <h2>Earphone</h2>
        </div>

        <div className={style.card}>
          <div className={style.imageSection}>
            <Image src="/homecard3.webp" alt="home card 1" layout="fill" />
          </div>
          <h2>Smartphone</h2>
        </div>

        <div className={style.card}>
          <div className={style.imageSection}>
            <Image src="/homecard4.webp" alt="home card 1" layout="fill" />
          </div>
          <h2>Smartwatch</h2>
        </div>
      </div>
    </div>
  );
}
