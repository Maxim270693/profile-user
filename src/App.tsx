import { Route, Routes } from "react-router-dom";

import { Main } from "./feature/Main";
import { Login } from "./feature/Login";
import { Header } from "./feature/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
