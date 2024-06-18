"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { clientLoginState } from "../../redux/slice/ClientLoginState";
export default function Page() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.clientLoginState);

  const [loginStatus, setLoginStatus] = useState(false);


  // logout functionality
  const logout=async()=>{
if(localStorage.getItem('clientLogin')){
  const res=await fetch('/api/logout',{
    method:"POST"
  })
  if(res.status=="200"){
    push('/')
    dispatch(clientLoginState(false));
    setLoginStatus(false);
    localStorage.removeItem('clientLogin')
    toast.success(`Client Logout Successfully`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }
}else{
  toast.success(`Please Login with proper credentials`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
  }


    // login user validate
    useEffect(() => {
      if (localStorage.getItem("clientLogin")) {
       
        setLoginStatus(true);
        dispatch(clientLoginState(true));
      }else{
        
        setLoginStatus(false);
        dispatch(clientLoginState(false));
      }
    },[loginState]);



  return (
    <header>
      {/* header logo */}
      <div className="icon">
        <Link href="/">
          <Image src="/icon.jpg" alt="icon logo" layout="fill" />
        </Link>
      </div>
      <span className="brand_title">
        BYTE <span className="sub_brand_name">BAZAAR</span>
      </span>

      {/* links */}
      <div className="links_container">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={""}>Shop</Link>
        </li>
        <li>
          <Link href={""}>Category</Link>
        </li>
        <li>
          <Link href={""}>Product</Link>
        </li>
      </div>

      {/* right section */}
      <div className="header_right">
        <li>
          <i>
            <IoSearch />
          </i>
        </li>
        <li className="userMenu">
          <i>
            <Link href={loginStatus ? "/user" : "/login"}>
              <FaRegUser />
            </Link>
          </i>
          {loginStatus?<><ul className="userSubMenu">
            <li>
              <Link href="">My Account</Link>
            </li>
            <li>
              <Link href="">Wish List</Link>
            </li>
            <li onClick={()=>logout()}>
           Logout
            </li>
          </ul></>:""}
        
        </li>
        <li>
          <i>
            <Link href="/">
              <span>0</span>
              <FiShoppingCart />
            </Link>
          </i>
        </li>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </header>
  );
}
