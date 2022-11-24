import style from Home.module.css

export const Home = () => {
    return(
    <><div className={style.loginType}>
            Admin Login
        </div>
        <div className={style.loginType}>
            Staff Login
        </div>
        <div className={style.loginType}>
            Student Login
        </div>
    </>  
    )
} 