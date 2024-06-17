"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "../login/style.module.css";
import { useEffect, useState } from "react";
export default function Page() {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // handle form enter value
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // register api calling
  const sendDataToServer = async (e) => {
    e.preventDefault();
    if (formData.fname.trim() === "") {
      toast.warn(`First name is required`, {
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
    if (formData.fname.length < 5) {
      toast.warn(`First Name must be at least 3 characters long`, {
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
    if (formData.lname.trim() === "") {
      toast.warn(`Last name is required`, {
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
    if (formData.password.length < 5) {
      toast.warn(`Password must be at least 5 characters long`, {
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

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!regex.test(formData.password)) {
      toast.warn(
        `Password must contain at least one symbol, one uppercase letter, one lowercase letter, and one number`,
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    // now send to data base
    const res = await fetch("/api/register", {
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
    if (res.status == "400") {
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

    if (res.status == "201") {
      toast.success(serverPayload.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        push("/login");
      }, 2000);
      return;
    }
  };



  useEffect(()=>{
    if(localStorage.getItem('clientLogin')){
      push('/')
    }
  },[])
  return (
    <div className={style.login}>
      <div className={style.form_container}>
        <h1>Create Account</h1>
        <p>Please Register using account detail bellow.</p>

        <form onSubmit={sendDataToServer}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={(e) => handleFormData(e)}
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={(e) => handleFormData(e)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            <button>Create</button>
          </div>
        </form>

        {/* create account */}
        <div className={style.createAccount}>
          <Link href="/login">Login account</Link>
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
