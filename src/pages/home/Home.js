import style from "./home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className={style.home}>
      <a href="http://127.0.0.1:8000/admin/" className={style.loginType}>
        Admin Login
      </a>
      <div className={style.loginType}>Staff Login</div>
      <div className={style.loginType}>Student Login</div>
    </main>
  );
};
