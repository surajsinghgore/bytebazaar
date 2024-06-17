import Link from 'next/link'
import style from './style.module.css'
export default function page() {
  return (
    <div className={style.login}>
     <div className={style.form_container}>
<h1>Login</h1>
<p>Please login using account detail bellow.</p>

<form>

    <input type="email" placeholder='Email' required/>
    <input type="password" placeholder='Password' required/>
    <div className={style.btn_section}>
<button>Sign In</button>
<div className={style.forget}>
<Link href="">
Forgot your password?
</Link>
</div>
    </div>
</form>


{/* create account */}
<div className={style.createAccount}>
<Link href="/register">
Create account
</Link>
</div>

     </div>
    </div>
  )
}
