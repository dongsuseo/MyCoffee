import React, { useEffect, useState } from "react";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHanlder = (e) => {
    setPassword(e.target.value);
  };
  useEffect(
    (e) => {
      setEmail(e.target.value);
      setPassword(e.target.value);
    },
    [email, password]
  );


  const onSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setEmail("");
  };

  return (
    <div>
      <div></div>
      <form onSubmit={onSubmitHandler}>
        <input
          id="Id"
          onChange={EmailHandler}
          placeholder="사용자 이름 또는 email을 입력해 주세요."
        />
        <input
          id="Password"
          onChange={PasswordHanlder}
          placeholder="비밀번호를 입력해 주세요."
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginModal;
