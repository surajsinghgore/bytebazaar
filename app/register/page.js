'use client'


import Link from "next/link";
import style from "../login/style.module.css";
import { useState } from "react";
export default function Page() {
const [formData,setFormData]=useState({
fname:'',
lname:'',
email:'',
password:''
})

// handle form enter value
const handleFormData=(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
}


// register api calling
const sendDataToServer=async(e)=>{
    e.preventDefault();

}
    return (
    <div className={style.login}>
      <div className={style.form_container}>
        <h1>Create Account</h1>
        <p>Please Register using account detail bellow.</p>

        <form onSubmit={sendDataToServer}>
          <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={(e)=>handleFormData(e)} required />
          <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={(e)=>handleFormData(e)} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e)=>handleFormData(e)} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={(e)=>handleFormData(e)} required />
          <div className={style.btn_section}>
            <button>Create</button>
          </div>
        </form>

        {/* create account */}
        <div className={style.createAccount}>
          <Link href="/login">Login account</Link>
        </div>
      </div>
    </div>
  );
}
