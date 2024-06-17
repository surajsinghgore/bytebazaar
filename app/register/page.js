import Link from "next/link";
import style from "../login/style.module.css";
export default function page() {
  return (
    <div className={style.login}>
      <div className={style.form_container}>
        <h1>Create Account</h1>
        <p>Please Register using account detail bellow.</p>

        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
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
