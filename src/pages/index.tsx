import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

const Router = () => {
  return(
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/homepage" element={<HomePage/>} />
  </Routes>
  )
};

export default Router;
