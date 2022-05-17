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
  }
// =======
//   return(
//       <div className={styles.text}>MyCoffee</div>
// >>>>>>> a9c55399021b594f0c4b95b48a0661354cdd8aa6
//   );
export default Title;
