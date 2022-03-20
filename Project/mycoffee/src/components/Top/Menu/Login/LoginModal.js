import React, { useEffect, useState } from "react";

import {useRecoilState, atom} from 'recoil';
import{EmailState,PasswordState,LogInState} from '../../../../atoms/atoms'
import {Link} from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useRecoilState(EmailState);
  const [password, setPassword] = useRecoilState(PasswordState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LogInState);

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHanlder = (e) => {
    setPassword(e.target.value);
  };
 console.log(isLoggedIn);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };

  return (
    <div>
      <Link to={"../"}>
        <button>Back</button>
      </Link>
      <form onSubmit={onSubmitHandler}>
        <input
          id="Id"
          onChange={EmailHandler}
          value={email}
          placeholder="사용자 이름 또는 email을 입력해 주세요."
        />
        <input
          id="Password"
          value={password}
          onChange={PasswordHanlder}
          placeholder="비밀번호를 입력해 주세요."
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginModal;
