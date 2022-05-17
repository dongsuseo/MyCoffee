import styles from "./Title.module.css"
import { Link } from "react-router-dom";
const Title = () => {
  const ClcikHandler = ()=>{
    console.log("Clcik!");
  }
  return (
    <Link to path={"../"}>
      <button onClick={ClcikHandler}>MyCoffee</button>
    </Link>
  );
};

export default Title;
