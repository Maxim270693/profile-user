import { Route, Routes } from "react-router-dom";

import { Main } from "./feature/Main";
import { Login } from "./feature/Login";
import { Header } from "./feature/Header";
import { ListAccounts } from "./feature/ListAccounts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/list-accounts"} element={<ListAccounts />} />
      </Routes>
    </div>
  );
}

export default App;
