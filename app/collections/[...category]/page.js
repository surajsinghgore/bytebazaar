"use client";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Page() {
  const getParams = useParams();
  const activeCategory = decodeURIComponent(getParams.category[0]);

  return (
    <>
      <div className={style.topCategory}>
        <div className={style.description}>
          <h1>Featured (T Shirt)</h1>
          <div className={style.path}>
            <div className={style.mainPath}>
              <Link href="/">Home</Link>
            </div>
            <div className={style.arrowRight}>
              <FaChevronRight />
            </div>
            <div className={style.parentPath}>Featured (T Shirt)</div>
          </div>

          <p className={style.desc}>
            Welcome to our collection, where excitement meets discovery. We're
            committed to keeping you at the forefront of fashion, technology,
            and lifestyle trends
          </p>
        </div>
        <div className={style.image_section}>
          <Image src="/tShirt.webp" alt={`${activeCategory}`} layout="fill" />
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
                  Accessories <span className={style.countNumber}>(24)</span>
                </Link>
              </li>

              <li>
                <Link href="">
                  Baby <span className={style.countNumber}>(20)</span>
                </Link>
              </li>

              <li>
                <Link href="">
                  Cap <span className={style.countNumber}>(90)</span>
                </Link>
              </li>

              <li>
                <Link href="">
                  Earphone <span className={style.countNumber}>(90)</span>
                </Link>
              </li>
            </div>
          </div>

          <div className={style.mainCategory}>
            <h1>
              Color{" "}
              <span className={style.arrowDown}>
                <FaAngleDown />
              </span>
            </h1>
            <div className={style.subCategories}>
              <li>
                <input type="checkbox" />
                black <span className={style.countNumber}>(4)</span>
              </li>

              <li>
                <input type="checkbox" />
                brown <span className={style.countNumber}>(6)</span>
              </li>
              <li>
                <input type="checkbox" />
                grey <span className={style.countNumber}>(7)</span>
              </li>
              <li>
                <input type="checkbox" />
                white <span className={style.countNumber}>(6)</span>
              </li>
            </div>
          </div>

          <div className={style.mainCategory}>
            <h1>
              Material{" "}
              <span className={style.arrowDown}>
                <FaAngleDown />
              </span>
            </h1>
            <div className={style.subCategories}>
              <li>
                <input type="checkbox" />
                fiber <span className={style.countNumber}>(2)</span>
              </li>

              <li>
                <input type="checkbox" />
                leather <span className={style.countNumber}>(4)</span>
              </li>
              <li>
                <input type="checkbox" />
                cotton <span className={style.countNumber}>(44)</span>
              </li>
            </div>
          </div>
        </div>

        <div className={style.itemCategory}></div>
      </div>
    </>
  );
}
