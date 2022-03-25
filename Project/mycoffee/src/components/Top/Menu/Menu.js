import {AiOutlineMenu} from "react-icons/ai";

import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <div><button className={styles.menuIcon}>
      <AiOutlineMenu/>
      </button></div>
  );
};

export default Menu;
