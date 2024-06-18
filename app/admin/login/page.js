"use client";
import Image from "next/legacy/image";
import style from "./style.module.css";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
export default function Page() {
  const [showPasswordState, setShowPasswordState] = useState(false);
  const showPassword = () => {
    setShowPasswordState(!showPasswordState);
  };
  return (
    <div className={style.adminLogin}>
      <div className={style.left}>
        <Image src="/adminlogin.svg" alt="admin login image" layout="fill" />
      </div>
      <div className={style.formSection}>
        <h1>Admin Login</h1>
        <p>
          Log in using the information provided during your registration to
          access the admin dashboard
        </p>

        <form>
          <li>
            <div className={style.title}>Username</div>
            <input type="text" name="" id="" required />
          </li>
          <li>
            <div className={style.title}>Password</div>
            <input
              type={showPasswordState ? "text" : "password"}
              name=""
              id=""
              required
            />
            <div className={style.eye} onClick={() => showPassword()}>
              {showPasswordState ? <IoMdEye /> : <IoEyeOff />}
            </div>
          </li>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
