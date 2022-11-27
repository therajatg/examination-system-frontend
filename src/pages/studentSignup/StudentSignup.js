import style from "./studentSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentSignup } from "../../features/index";
import { toast } from "react-toastify";
import axios from "axios";

export function StudentSignup() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    isActive: true,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.auth?.token);

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(studentSignup(userDetail));
  };

  return (
    <div className={style.loginPage}>
      <h1>Welcome To Student Signup</h1>
      <form className={style.form} onSubmit={signupHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetail.name}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, name: e.target.value })
            }
          />
        </div>
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
          <button className={style.loginBtn}>SIGNUP</button>
          <br />
        </div>
        <p className={style.signupLine}>
          Already a user?{" "}
          <Link to="/studentLogin" className={style.signup}>
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
