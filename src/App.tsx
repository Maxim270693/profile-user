import React from "react";
import { Header } from "./feature/Header";
import { Footer } from "./feature/Footer";
import { Login } from "./feature/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
