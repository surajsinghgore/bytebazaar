import Image from "next/legacy/image";
import styles from "./page.module.css";
import HomeSlider from '../components/HomeSlider/page'
import HomeCategory from '../components/HomeCategory/page'
export default function Home() {
  return <>
    <HomeSlider/>
    <HomeCategory />
  </>;
}
