"use client";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import style from "./style.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useParams } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {
  const getParams = useParams();
  const activeCategory = decodeURIComponent(getParams.category[0]);
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);

  const [totalCount, setTotalCount] = useState({
    smartphone: 0,
    watch: 0,
    adapter: 0,
    earphone: 0,
    apple: 0,
    samsung: 0,
    google: 0,
    greaterThanLac: 0,
    largeRange: 0,
    mediumRange: 0,
    smallRange: 0,
  });

  // filter data using category
  const filterDataUsingCategory = (data, category) => {
    const countData = data.filter((item) => item.category === category);
    return countData;
  };

  // filter data using brand name
  const filterDataUsingBrandName = (data, brandName) => {
    const countData = data.filter((item) =>
      item.name.toLowerCase().includes(`${brandName}`)
    );
    return countData;
  };

  // loading data from server
  const fetchAllProductData = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();

    setData(data.data);
    setBackupData(data.data);

    // filter smartphone data
    const smartphoneData = filterDataUsingCategory(data.data, "smartphone");

    setTotalCount((prevCount) => ({
      ...prevCount,
      smartphone: smartphoneData.length,
    }));

    // filter watch data
    const watchData = filterDataUsingCategory(data.data, "watch");
    setTotalCount((prevCount) => ({
      ...prevCount,
      watch: watchData.length,
    }));

    // filter adapter data
    const adapterData = filterDataUsingCategory(data.data, "adapter");
    setTotalCount((prevCount) => ({
      ...prevCount,
      adapter: adapterData.length,
    }));
    // filter earphone data
    const earphoneData = filterDataUsingCategory(data.data, "earphone");
    setTotalCount((prevCount) => ({
      ...prevCount,
      earphone: earphoneData.length,
    }));
    // ! filter using brand
    // apple data filter
    const appleData = filterDataUsingBrandName(data.data, "apple");
    setTotalCount((prevCount) => ({
      ...prevCount,
      apple: appleData.length,
    }));
    // samsung data filter
    const samsungData = filterDataUsingBrandName(data.data, "samsung");
    setTotalCount((prevCount) => ({
      ...prevCount,
      samsung: samsungData.length,
    }));
    // google data filter
    const googleData = filterDataUsingBrandName(data.data, "google");
    setTotalCount((prevCount) => ({
      ...prevCount,
      google: googleData.length,
    }));
    // filter data using price range
    // lac and  above
    const greaterThanLacData = data.data.filter((item) => item.price > 100000);
    setTotalCount((prevCount) => ({
      ...prevCount,
      greaterThanLac: greaterThanLacData.length,
    }));
    // 50000-99999
    const largeRangeData = data.data.filter(
      (item) => item.price >= 50000 && item.price <= 99999
    );
    setTotalCount((prevCount) => ({
      ...prevCount,
      largeRange: largeRangeData.length,
    }));
    // 20000-49999
    const mediumRangeData = data.data.filter(
      (item) => item.price >= 20000 && item.price <= 49999
    );
    setTotalCount((prevCount) => ({
      ...prevCount,
      mediumRange: mediumRangeData.length,
    }));
    // less than 20000
    const smallRangeData = data.data.filter((item) => item.price <= 19999);
    setTotalCount((prevCount) => ({
      ...prevCount,
      smallRange: smallRangeData.length,
    }));
  };
  useEffect(() => {
    fetchAllProductData();
  }, []);
  return (
    <>
      <div className={style.topCategory}>
        <div className={style.description}>
          <h1>Featured (Electronics)</h1>
          <div className={style.path}>
            <div className={style.mainPath}>
              <Link href="/">Home</Link>
            </div>
            <div className={style.arrowRight}>
              <FaChevronRight />
            </div>
            <div className={style.parentPath}>Featured (Electronics)</div>
          </div>

          <p className={style.desc}>
            Welcome to our collection, where excitement meets discovery. We're
            committed to keeping you at the forefront technology, and lifestyle
            trends
          </p>
        </div>
        <div className={style.image_section}>
          <Image src="/category.webp" alt={`${activeCategory}`} layout="fill" />
        </div>
      </div>

      <div className={style.mainCategoryPage}>
        <div className={style.leftCategory}>
          <div className={style.mainCategory}>
            <h1>
              Categories{" "}
              <span className={style.arrowDown}>
                <FaAngleDown />
              </span>
            </h1>
            <div className={style.subCategories}>
              <li>
                <Link href="">
                  Smartphone{" "}
                  <span className={style.countNumber}>
                    ({totalCount.smartphone})
                  </span>
                </Link>
              </li>

              <li>
                <Link href="">
                  Watch <span className={style.countNumber}> ({totalCount.watch})</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  Adapter <span className={style.countNumber}> ({totalCount.adapter})</span>
                </Link>
              </li>

              <li>
                <Link href="">
                  Earphone <span className={style.countNumber}> ({totalCount.earphone})</span>
                </Link>
              </li>
            </div>
          </div>

          <div className={style.mainCategory}>
            <h1>
              Brand{" "}
              <span className={style.arrowDown}>
                <FaAngleDown />
              </span>
            </h1>
            <div className={style.subCategories}>
              <li>
                <input type="checkbox" />
                Apple <span className={style.countNumber}> ({totalCount.apple})</span>
              </li>

              <li>
                <input type="checkbox" />
                Samsung <span className={style.countNumber}> ({totalCount.samsung})</span>
              </li>

              <li>
                <input type="checkbox" />
                google <span className={style.countNumber}> ({totalCount.google})</span>
              </li>
            </div>
          </div>

          <div className={style.mainCategory}>
            <h1>
              Price{" "}
              <span className={style.arrowDown}>
                <FaAngleDown />
              </span>
            </h1>
            <div className={style.subCategories}>
              <li>
                <input type="checkbox" />
                10000+ <span className={style.countNumber}> ({totalCount.greaterThanLac})</span>
              </li>

              <li>
                <input type="checkbox" />
                50000 - 99999 <span className={style.countNumber}> ({totalCount.largeRange})</span>
              </li>
              <li>
                <input type="checkbox" />
                20000 - 49999 <span className={style.countNumber}> ({totalCount.mediumRange})</span>
              </li>
              <li>
                <input type="checkbox" />
                19999- <span className={style.countNumber}> ({totalCount.smallRange})</span>
              </li>
            </div>
          </div>
        </div>

        <div className={style.itemCategory}>
          {/* top bar */}
          <div className={style.topBar}>
            <div className={style.search}>
              <select>
                <option value="manual">Filter</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
              </select>
            </div>

            <div className={style.showingResult}>
              Showing 1 - {data.length} of {data.length} result
            </div>
          </div>

          {/* items container */}
          <div className={style.itemContainerBody}>
            {data.length != 0 && (
              <>
                {data.map((item) => {
                  return (
                    <div className={style.itemCard} key={item._id}>
                      <div className={style.itemCardImageContainer}>
                        <Image
                          src={item.image}
                          alt={item.image}
                          layout="fill"
                        />
                        {/* menu on image */}
                        <div className={style.menuOnImage}>New</div>

                        {/* image drop down */}
                        <div className={style.imageDropDown}>
                          <li title="Quick View">
                            <Link href="">
                              <FaRegEye />
                            </Link>
                          </li>
                          <li title="Add to cart">
                            <Link href="">
                              <FaShoppingCart />
                            </Link>
                          </li>
                          <li title="Add to wishlist">
                            <Link href="">
                              <FaHeart />
                            </Link>
                          </li>
                        </div>
                      </div>

                      <div className={style.productDesc}>
                        <h2>{item.name}</h2>
                        <p>Rs. {item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
