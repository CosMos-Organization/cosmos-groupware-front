import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import './SCSS/base/reset.scss'
import './SCSS/base/font.scss'
import Admin_Employee from "./pages/Admin_Employee";
import React_Calendar from "./pages/React_Calendar";
import Admin_Organization from "./pages/Admin_Organization";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/admin/employee" element={<Admin_Employee />}></Route>
        <Route path="/admin/org" element={<Admin_Organization />}></Route>
        <Route path="/calendar" element={<React_Calendar />}></Route>
      </Routes>

    </div>
  );
}

export default App;

