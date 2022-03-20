import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import App from "../../App";
import LoginModal from "../Top/Menu/Login/LoginModal";

function RouterBase(){
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<LoginModal/>}/>
            </Routes>
        </Router>
    )
}

export default RouterBase;