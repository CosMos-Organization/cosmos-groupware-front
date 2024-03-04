import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import './SCSS/base/reset.scss'
import './SCSS/base/font.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>

    </div>
  );
}

export default App;

