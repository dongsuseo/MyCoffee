import React from "react";
import {useRecoilState} from 'recoil';
import { AiOutlineMenu } from "react-icons/ai";

import { isClickedSideBarState } from "../../../atoms/atoms";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedSideBarState);

  const onClickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClickHandler} className={styles.menuIcon}>
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default Menu;
