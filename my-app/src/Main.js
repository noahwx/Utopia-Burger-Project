import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Main = () => {
    return ( 
        <Routes>
            <Route exact path='/' element={<Home />}/>
        </Routes>
     );
}
 
export default Main;