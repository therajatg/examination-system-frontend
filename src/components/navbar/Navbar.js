import style from "./navbar.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { studentLogout, staffLogout } from "../../features/index";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentDetail } = useSelector((store) => store.studentAuth);
  const [name, setName] = useState("");

  //   useEffect(() => {
  //     (async () => {
  //       const res1 = await axios.get("/api/categories");
  //       setCategories(res1.data.categories);
  //     })();
  //   }, []);

  //   const loginHandler = () => {
  //     navigate("/login");
  //   };

  //   const logoutHandler = () => {
  //     authDispatch({ type: "TOKEN", payload: null });
  //     localStorage.removeItem("token");
  //     toast.success("Logout Successful");
  //   };

  const logoutHandler = () => {
    if (studentDetail?.name) {
      dispatch(studentLogout());
    } else {
      dispatch(staffLogout());
    }
    navigate("/");
  };

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("studentDetail"));
    setName(obj?.name);
  }, []);

  return (
    <nav className={style.navContainer}>
      <p>Online Examinaton Portal</p>
      <div className={style.right}>
        <p>Welcome {name}</p>
        <p onClick={logoutHandler} className={style.logoutBtn}>
          Logout
        </p>
      </div>
    </nav>
  );
}
