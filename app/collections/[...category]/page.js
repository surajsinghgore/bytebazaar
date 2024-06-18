"use client"
import { FaChevronRight } from "react-icons/fa";
import style from './style.module.css'
import React, { useEffect,useState } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/legacy/image';
import Link from 'next/link';
export default function Page() {
   const getParams = useParams();
   const activeCategory=decodeURIComponent(getParams.category[0]);
  
  return (
    <div className={style.topCategory}>
    <div className={style.description}>
<h1>Featured (T Shirt)</h1>
<div className={style.path}>
  <div className={style.mainPath}><Link href="">Home</Link></div>
  <div className={style.arrowRight}><FaChevronRight /></div>
  <div className={style.parentPath}>
  Featured (T Shirt)
  </div>
</div>

<p className={style.desc}>Welcome to our collection, where excitement meets discovery. We're committed to keeping you at the forefront of fashion, technology, and lifestyle trends</p>
    </div>
    <div className={style.image_section}>
      <Image src="/tShirt.webp" alt={`${activeCategory}`} layout='fill' />

    </div>
    </div>
  )
}
