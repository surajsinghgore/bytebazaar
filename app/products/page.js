"use client";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import style from "./style.module.css";

import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../../layout/Loader/page";
import ProductItemContainer from '../../components/ProductItemContainer/page'
export default function Page() {

 
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [selectedTopOption, setSelectedTopOption] = useState("");
  const [selectedBrandValues, setBrandSelectedValues] = useState([]);
  const [selectedPriceValues, setPriceSelectedValues] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
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

  // Handler function to update top filter select box
  const handleSelectChange = (event) => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);

    setSelectedTopOption(event.target.value);
    if (event.target.value === "low") {
      setData(backupData);
    }
    if (event.target.value === "ascending") {
      const sortedByName = [...backupData].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setData(sortedByName);
    }
    if (event.target.value === "descending") {
      const sortedByName = [...backupData].sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setData(sortedByName);
    }
    if (event.target.value === "low") {
      const sortedByPrice = [...backupData].sort((a, b) => a.price - b.price);
      setData(sortedByPrice);
    }
    if (event.target.value === "high") {
      const sortedByPrice = [...backupData].sort((a, b) => b.price - a.price);
      setData(sortedByPrice);
    }
  };

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

  // filter data
  const filterData = (category) => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);

    if (category == "smartphone") {
      const smartphoneData = filterDataUsingCategory(backupData, "smartphone");
      setData(smartphoneData);
    }
    if (category == "watch") {
      const Data = filterDataUsingCategory(backupData, "watch");
      setData(Data);
    }
    if (category == "adapter") {
      const Data = filterDataUsingCategory(backupData, "adapter");
      setData(Data);
    }
    if (category == "earphone") {
      const Data = filterDataUsingCategory(backupData, "earphone");
      setData(Data);
    }
  };

  // handle check box brand name
  const handleCheckboxChange = (event) => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);

    const value = event.target.value;

    if (event.target.checked) {
      setBrandSelectedValues([...selectedBrandValues, value]);
    } else {
      setBrandSelectedValues(
        selectedBrandValues.filter((item) => item !== value)
      );
    }
  };
  // handle price filter checkbox
  const handlePriceCheckboxChange = (event) => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);

    const value = event.target.value;

    if (event.target.checked) {
      setPriceSelectedValues([...selectedPriceValues, value]);
    } else {
      setPriceSelectedValues(
        selectedPriceValues.filter((item) => item !== value)
      );
    }
  };
  useEffect(() => {
    fetchAllProductData();
  }, []);

  // handle brand filter
  useEffect(() => {
    if (selectedBrandValues.length !== 0) {
      let newArray = [];
      selectedBrandValues.map((item) => {
        newArray.push(...filterDataUsingBrandName(backupData, item));
      });
      setData(newArray);
    }
  }, [selectedBrandValues]);

  // handle price range change
  useEffect(() => {
    if (selectedPriceValues.length !== 0) {
      let newArray = [];

      selectedPriceValues.map((item) => {
        if (item === "lac") {
          const DataReturn = backupData.filter((item) => item.price > 100000);
          newArray.push(...DataReturn);
        }
        if (item === "large") {
          const DataReturn = backupData.filter(
            (item) => item.price >= 50000 && item.price <= 99999
          );
          newArray.push(...DataReturn);
        }
        if (item === "medium") {
          const DataReturn = backupData.filter(
            (item) => item.price >= 20000 && item.price <= 49999
          );
          newArray.push(...DataReturn);
        }
        if (item === "small") {
          const DataReturn = backupData.filter((item) => item.price <= 19999);
          newArray.push(...DataReturn);
        }
      });

      setData(newArray);
    }
  }, [selectedPriceValues]);
  return (
    <>
      <div className={style.topCategory}>
        <div className={style.description}>
          <h1>Featured (Products)</h1>
          <div className={style.path}>
            <div className={style.mainPath}>
              <Link href="/">Home</Link>
            </div>
            <div className={style.arrowRight}>
              <FaChevronRight />
            </div>
            <div className={style.parentPath}>Product</div>
          </div>

          <p className={style.desc}>
            Welcome to our collection, where excitement meets discovery. We're
            committed to keeping you at the forefront technology, and lifestyle
            trends with smartphone,watches and earphones
          </p>
        </div>
        <div className={style.image_section}>
          <Image src="/category.webp" alt={"category"} layout="fill" />
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
              <li onClick={() => filterData("smartphone")}>
                Smartphone{" "}
                <span className={style.countNumber}>
                  ({totalCount.smartphone})
                </span>
              </li>

              <li onClick={() => filterData("watch")}>
                Watch{" "}
                <span className={style.countNumber}> ({totalCount.watch})</span>
              </li>
              <li onClick={() => filterData("adapter")}>
                Adapter{" "}
                <span className={style.countNumber}>
                  {" "}
                  ({totalCount.adapter})
                </span>
              </li>

              <li onClick={() => filterData("earphone")}>
                Earphone{" "}
                <span className={style.countNumber}>
                  {" "}
                  ({totalCount.earphone})
                </span>
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
                <input
                  type="checkbox"
                  name="brandName"
                  value="apple"
                  id="apple"
                  checked={selectedBrandValues.includes("apple")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="apple">
                  Apple{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.apple})
                  </span>
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  name="brandName"
                  value="samsung"
                  id="samsung"
                  checked={selectedBrandValues.includes("samsung")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="samsung">
                  Samsung{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.samsung})
                  </span>
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  name="brandName"
                  value="google"
                  id="google"
                  checked={selectedBrandValues.includes("google")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="google">
                  google{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.google})
                  </span>
                </label>
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
                <input
                  type="checkbox"
                  name="price"
                  value="lac"
                  id="lac"
                  checked={selectedPriceValues.includes("lac")}
                  onChange={handlePriceCheckboxChange}
                />

                <label htmlFor="lac">
                  10000+{" "}
                  <span className={style.countNumber}>
                    ({totalCount.greaterThanLac})
                  </span>
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  name="price"
                  value="large"
                  id="large"
                  checked={selectedPriceValues.includes("large")}
                  onChange={handlePriceCheckboxChange}
                />
                <label htmlFor="large">
                  50000 - 99999{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.largeRange})
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="price"
                  value="medium"
                  id="medium"
                  checked={selectedPriceValues.includes("medium")}
                  onChange={handlePriceCheckboxChange}
                />
                <label htmlFor="medium">
                  20000 - 49999{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.mediumRange})
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="price"
                  value="small"
                  id="small"
                  checked={selectedPriceValues.includes("small")}
                  onChange={handlePriceCheckboxChange}
                />
                <label htmlFor="small">
                  0 - 19999{" "}
                  <span className={style.countNumber}>
                    {" "}
                    ({totalCount.smallRange})
                  </span>
                </label>
              </li>
            </div>
          </div>
        </div>

        <div className={style.itemCategory}>
          {loaderState ? (
            <Loader />
          ) : (
            <>
              {/* top bar */}
              <div className={style.topBar}>
                <div className={style.search}>
                  <select
                    value={selectedTopOption}
                    onChange={handleSelectChange}
                  >
                    <option value="no">Filter</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="low">Price, low to high</option>
                    <option value="high">Price, high to low</option>
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
                        <ProductItemContainer item={item} key={item._id}/>
                        
                      );
                    })}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
