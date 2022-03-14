import React,{useState, useEffect} from "react";

import Modal from "./LoginModal";

const Login = ()=>{
    const [login,setLogin] = useState(false);

    const LogInClickHandler = ()=>{
        setLogin(true);
    }

    useEffect(()=>{},[login]);

    return (
      <div>
        <button onClick={LogInClickHandler}>Login</button>
        {login ? <Modal/>:<div/>}
      </div>
    );
}

export default Login;