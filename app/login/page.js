"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
    const { push } = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle login form data credentials
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // login functionality
  const loginFunctionality = async (e) => {
    e.preventDefault();
    if (formData.email.trim() === "") {
        toast.warn(`Email is required`, {
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.warn(`Email is not valid`, {
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



      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let serverPayload = await res.json();
      if (res.status == "500") {
        toast.error("Internal Server Error", {
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
      if (res.status == "400"||res.status == "401"||res.status == "404") {
        toast.warn(`${serverPayload.error}`, {
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
  
      if (res.status == "200") {
        toast.success(serverPayload.message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem('login',"true");
        setTimeout(() => {
          push("/");
        }, 2000);
        return;
      }
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
    </div>
  );
}
