import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Modal from "./LoginModal";
import { EmailState, PasswordState, LogInState } from "../../../../atoms/atoms";

const Login = () => {
  const [login, setLogin] = useRecoilState(LogInState);
  const [isClicked, setIsClicked] = useState(false);

  // const LogInClickHandler = () => {
  //   setLogin((prev) => !prev);
  // };
  const ClickHandler = () => {
    setIsClicked((prev) => !prev);
  };
  const Email = useRecoilValue(EmailState);
  const Password = useRecoilValue(PasswordState);

  console.log(Email);
  console.log(Password);
  console.log(login);

  const ClickedHandler =  (click)=>{
    setIsClicked(click);
  }

  return (
    <div>
      {login ? (
        <div>
          {`${Email}(님)..`}
          <button onClick={setLogin(false)}>LogOut</button>
        </div>
      ) : (
        <button onClick={ClickHandler}>Login</button>
      )}
      {isClicked ? <Modal isClicked={ClickedHandler}/> : <div/>}
    </div>
  );
};

export default Login;
