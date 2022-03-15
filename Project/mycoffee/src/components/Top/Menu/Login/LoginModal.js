import React, { useEffect, useState } from "react";

import {useRecoilState} from 'recoil';
import atoms from '../../../../atoms/atoms';

const LoginModal = () => {
  const [email, setEmail] = useRecoilState(atoms.EmailState);
  const [password, setPassword] = useRecoilState(atoms.PasswordState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(atoms.LogInState);

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHanlder = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setEmail("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <button>로그아웃</button>
      ) : (
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
      )}
    </div>
  );
};

export default LoginModal;
