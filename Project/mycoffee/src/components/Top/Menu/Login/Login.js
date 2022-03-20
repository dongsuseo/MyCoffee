import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Modal from "./LoginModal";
import {Link} from "react-router-dom";
import { EmailState, LogInState } from "../../../../atoms/atoms";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LogInState);
  const [isClicked, setIsClicked] = useState(false);

  // const LogInClickHandler = () => {
  //   setLogin((prev) => !prev);
  // };
  const ClickHandler = () => {
    setIsClicked((prev) => !prev);
  };
  const Email = useRecoilValue(EmailState);

  console.log(isLoggedIn);

  const ClickedHandler =  (click)=>{
    setIsClicked(click);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {`${Email}(님)..`}
          <button onClick={setIsLoggedIn(false)}>LogOut</button>
        </div>
      ) : (
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Login;
