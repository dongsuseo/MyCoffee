import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {BiUser} from "react-icons/bi";
import styles from "./Login.module.css";

import Modal from "./LoginModal";
import {Link} from "react-router-dom";
import { EmailState, LogInState } from "../../../atoms/atoms";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LogInState);
  const [isClicked, setIsClicked] = useState(false);


  const Email = useRecoilValue(EmailState);

  console.log(isLoggedIn);

  const logOutHandler= ()=>{
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Link to={"/login"}>
            <button className={styles.loginButton}>
              <BiUser className={styles.loginIcon} />
            </button>
          </Link>
          {`${Email}(님)..`}
          <button onClick={logOutHandler}>LogOut</button>
        </div>
      ) : (
        <Link to={"/login"}>
          <button className={styles.loginButton}>
            <BiUser className={styles.loginIcon}/>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Login;
