import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

const Router = () => {
  return(
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/homepage" element={<HomePage/>} />
  </Routes>
  )
};

export default Router;
