import style from "./staffLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { staffLogin } from "../../features/index";
import { toast } from "react-toastify";

export function StaffLogin() {
  const [userDetail, setUserDetail] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.auth?.token);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(staffLogin(userDetail));
  };

  return (
    <div className={style.loginPage}>
      <h1>Welcome To Staff Login</h1>
      <form className={style.form} onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetail.email}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDetail.password}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          />
        </div>
        <div>
          <button className={style.loginBtn}>LOGIN</button>
          <br />
        </div>
        <p className={style.signupLine}>
          New here?{" "}
          <Link to="/staffSignup" className={style.signup}>
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
