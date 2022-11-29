import style from "./studentLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentLogin } from "../../features/index";
import { toast } from "react-toastify";

export function StudentLogin() {
  const [userDetail, setUserDetail] = useState({ email: null, password: null });
  const { studentDetail } = useSelector((store) => store.studentAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(studentLogin(userDetail));
    if (studentDetail) {
      navigate("/studentPortalHome");
    }
  };

  return (
    <div className={style.loginPage}>
      <h1>Welcome To Student Login</h1>
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
          <Link to="/studentSignup" className={style.signup}>
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
