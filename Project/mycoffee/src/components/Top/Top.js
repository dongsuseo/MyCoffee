import React, {useState} from "react";

import styles from "./Top.module.css";
import Login from "./Menu/Login/Login";
import Title from "./Title";
import Menu from "./Menu/Menu";

const Top = () => {
  
  return (
    <div className={styles.top}>
      <div className={styles.title}>
        <Title />
      </div>
      <div className={styles.login}>
        <Login />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Top;
