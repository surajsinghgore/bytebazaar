import Image from 'next/legacy/image'
import style from './style.module.css'

export default function page() {
  return (
    <div className={style.LoaderContainer}>
      {/* <Image  */}
      
    <div className={style.LoaderImageContainer}>

<Image src="/loader.gif" alt="loader" layout='fill'/>

    </div>
    </div>
  )
}
