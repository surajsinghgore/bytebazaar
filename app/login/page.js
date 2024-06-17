"use client";
import Link from "next/link";
import style from "./style.module.css";
import { useState } from "react";
export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle login form data credentials
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // login functionality
  const loginFunctionality = async(e) => {
    e.preventDefault();
    console.log(formData)
  };
  return (
    <div className={style.login}>
      <div className={style.form_container}>
        <h1>Login</h1>
        <p>Please login using account detail bellow.</p>

        <form onSubmit={loginFunctionality}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleFormData(e)}
            required
          />
          <div className={style.btn_section}>
            <button>Sign In</button>
            <div className={style.forget}>
              <Link href="">Forgot your password?</Link>
            </div>
          </div>
        </form>

        {/* create account */}
        <div className={style.createAccount}>
          <Link href="/register">Create account</Link>
        </div>
      </div>
    </div>
  );
}
