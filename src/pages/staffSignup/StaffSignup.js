import style from "./staffSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentLogin } from "../../features/index";
import { toast } from "react-toastify";

export function StaffSignup() {
  const [userDetail, setUserDetail] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.auth?.token);

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(studentLogin(userDetail));
    // .then((response) => {
    //   if (response?.payload?.encodedToken) {
    //     navigate("/page/home");
    //   } else if (
    //     response.error.message === "Request failed with status code 401"
    //   ) {
    //     toast.error("Please enter correct credentials");
    //   } else {
    //     toast.error(`${response.error.message}. Please try again.`);
    //   }
    // });
  };

  return (
    <div className={style.loginPage}>
      <h1>Welcome To Staff Signup</h1>
      <form className={style.form} onSubmit={signupHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
          <Link to="/login" className={style.signup}>
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
