import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import './SCSS/base/reset.scss'
import './SCSS/base/font.scss'
import Admin_Employee from "./pages/Admin_Employee";
import React_Calender from "./pages/React_Calender";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/admin/employee" element={<Admin_Employee />}></Route>
        <Route path="/calender" element={<React_Calender />}></Route>
      </Routes>

    </div>
  );
}

export default App;

